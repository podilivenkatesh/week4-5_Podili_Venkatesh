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
exports.endShift = exports.startShift = void 0;
const shift_1 = __importDefault(require("../models/shift"));
// shift starts 
const startShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = req.employeeId;
    try {
        const shift = yield shift_1.default.create({ employeeId, startTime: new Date(), endTime: null });
        res.json({ message: 'Shift started', shift });
    }
    catch (error) {
        console.log(error);
    }
});
exports.startShift = startShift;
// shift ends
const endShift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const employeeId = req.employeeId;
    try {
        const shift = yield shift_1.default.findOne({ where: { employeeId, endTime: null } });
        if (!shift) {
            return res.json({ message: 'No active shift found' });
        }
        shift.endTime = new Date();
        shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / 3600000;
        yield shift.save();
        res.json({ message: 'Shift ended', shift });
    }
    catch (error) {
        console.log(error);
    }
});
exports.endShift = endShift;
//# sourceMappingURL=shiftController.js.map