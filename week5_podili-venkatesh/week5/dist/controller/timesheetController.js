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
exports.getTimesheets = exports.createTimesheet = void 0;
const timesheet_1 = __importDefault(require("../models/timesheet"));
// creating time sheet by employee
const createTimesheet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { projectName, taskName, fromDate, toDate, shiftId } = req.body;
    const employeeId = req.employeeId;
    try {
        const timesheet = yield timesheet_1.default.create({
            projectName,
            taskName,
            fromDate,
            toDate,
            shiftId,
            employeeId,
        });
        res.json({ message: 'Timesheet created', timesheet });
    }
    catch (error) {
        console.log(error);
    }
});
exports.createTimesheet = createTimesheet;
// getting time sheets by employee
const getTimesheets = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Fetch all timesheets from the database
        const timesheets = yield timesheet_1.default.findAll();
        // Send the timesheets as a response
        res.json({ timesheets });
    }
    catch (error) {
        console.log(error);
        res.json({ message: 'Internal server error' });
    }
});
exports.getTimesheets = getTimesheets;
//# sourceMappingURL=timesheetController.js.map