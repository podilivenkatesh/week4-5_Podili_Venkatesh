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
// src/services/shiftService.ts
const shift_1 = __importDefault(require("../models/shift"));
const startShift = (employeeId) => __awaiter(void 0, void 0, void 0, function* () {
    const shift = yield shift_1.default.create({
        employeeId,
        startTime: new Date(),
    });
    return shift;
});
exports.startShift = startShift;
const endShift = (shiftId) => __awaiter(void 0, void 0, void 0, function* () {
    const shift = yield shift_1.default.findByPk(shiftId);
    if (!shift) {
        throw new Error('Shift not found');
    }
    shift.endTime = new Date();
    shift.actualHours = (shift.endTime.getTime() - shift.startTime.getTime()) / (1000 * 60 * 60);
    yield shift.save();
    return shift;
});
exports.endShift = endShift;
//# sourceMappingURL=shiftService.js.map