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
exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const employee_1 = __importDefault(require("../models/employee"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
// for registration
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, email, password, assignedShiftHours, role } = req.body;
    try {
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const employee = yield employee_1.default.create({
            name,
            email,
            password: hashedPassword,
            assignedShiftHours,
            role,
        });
        res.json({ message: 'Employee registered successfully', employee });
    }
    catch (error) {
        console.log(error);
    }
});
exports.register = register;
// for login
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const employee = yield employee_1.default.findOne({ where: { email } });
        if (!employee) {
            return res.json({ message: 'Employee not found' });
        }
        const isPasswordValid = yield bcryptjs_1.default.compare(password, employee.password);
        if (!isPasswordValid) {
            return res.json({ message: 'Invalid password' });
        }
        const token = jsonwebtoken_1.default.sign({ id: employee.id, role: employee.role }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });
        res.json({ message: 'Login successful', token });
    }
    catch (error) {
        console.log(error);
    }
});
exports.login = login;
//# sourceMappingURL=authController.js.map