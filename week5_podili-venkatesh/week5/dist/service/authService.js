"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutEmployee = exports.loginEmployee = exports.registerEmployee = void 0;
// src/services/authService.ts
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const employee_1 = __importDefault(require("../models/employee"));
const shift_1 = __importDefault(require("../models/shift"));
const JWT_SECRET = process.env.JWT_SECRET;
const registerEmployee = (name, email, password, assignedShiftHours, role) => __awaiter(void 0, void 0, void 0, function* () {
    const hashedPassword = yield bcrypt_1.default.hash(password, 10);
    const employee = yield employee_1.default.create({
        name,
        email,
        password: hashedPassword,
        assignedShiftHours,
        role,
    });
    return employee;
});
exports.registerEmployee = registerEmployee;
const loginEmployee = (email, password) => __awaiter(void 0, void 0, void 0, function* () {
    const employee = yield employee_1.default.findOne({ where: { email } });
    if (!employee) {
        throw new Error('Invalid credentials');
    }
    const isPasswordValid = yield bcrypt_1.default.compare(password, employee.password);
    if (!isPasswordValid) {
        throw new Error('Invalid credentials');
    }
    const token = jsonwebtoken_1.default.sign({ id: employee.id, email: employee.email, role: employee.role }, JWT_SECRET, { expiresIn: '1h' });
    const shift = yield shift_1.default.create({
        employeeId: employee.id,
        startTime: new Date(),
    });
    return { token, shiftId: shift.id };
});
exports.loginEmployee = loginEmployee;
const logoutEmployee = (shiftId) => __awaiter(void 0, void 0, void 0, function* () {
    const shift = yield shift_1.default.findByPk(shiftId);
    if (!shift) {
        throw new Error('Shift not found');
    }
    shift.endTime = new Date();
    shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60);
    yield shift.save();
    return shift;
});
exports.logoutEmployee = logoutEmployee;
//# sourceMappingURL=authService.js.map