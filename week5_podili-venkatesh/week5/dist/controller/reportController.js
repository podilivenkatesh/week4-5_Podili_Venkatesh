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
exports.getReport = void 0;
const shift_1 = __importDefault(require("../models/shift"));
const employee_1 = __importDefault(require("../models/employee"));
// it will give report for an employee 
const getReport = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shifts = yield shift_1.default.findAll({
            include: [employee_1.default],
            attributes: ['startTime', 'endTime', 'actualHours'],
        });
        const report = shifts.map((shift) => ({
            employeeName: shift.Employee.name,
            assignedShiftHours: shift.Employee.assignedShiftHours,
            startTime: shift.startTime,
            endTime: shift.endTime,
            actualHours: shift.actualHours,
        }));
        res.json(report);
    }
    catch (error) {
        if (error instanceof Error) {
            console.error('Error fetching report:', error.message);
            res.json({ error: error.message });
        }
        else {
            console.error('Unknown error:', error);
            res.json({ error: 'An unknown error occurred' });
        }
    }
});
exports.getReport = getReport;
//# sourceMappingURL=reportController.js.map