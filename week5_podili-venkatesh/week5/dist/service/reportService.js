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
exports.generateReport = void 0;
// src/services/reportService.ts
const employee_1 = __importDefault(require("../models/employee"));
const shift_1 = __importDefault(require("../models/shift"));
const generateReport = () => __awaiter(void 0, void 0, void 0, function* () {
    const employees = yield employee_1.default.findAll({
        include: [
            {
                model: shift_1.default,
                as: 'shifts',
                required: true,
            },
        ],
    });
    const reportData = employees.map((employee) => ({
        name: employee.name,
        email: employee.email,
        assignedShiftHours: employee.assignedShiftHours,
        actualHours: employee.getDataValue('shifts').reduce((sum, shift) => sum + shift.getDataValue('actualHours'), 0),
    }));
    return reportData;
});
exports.generateReport = generateReport;
//# sourceMappingURL=reportService.js.map