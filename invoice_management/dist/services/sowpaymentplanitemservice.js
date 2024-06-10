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
exports.createSOWPaymentPlanItem = exports.getAllSOWPaymentPlanItems = void 0;
const sowpaymentplanitem_1 = __importDefault(require("../models/sowpaymentplanitem"));
const getAllSOWPaymentPlanItems = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sowpaymentplanitem_1.default.findAll();
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        else {
            throw new Error('An unexpected error occurred');
        }
    }
});
exports.getAllSOWPaymentPlanItems = getAllSOWPaymentPlanItems;
const createSOWPaymentPlanItem = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield sowpaymentplanitem_1.default.create(data);
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        else {
            throw new Error('An unexpected error occurred');
        }
    }
});
exports.createSOWPaymentPlanItem = createSOWPaymentPlanItem;
//# sourceMappingURL=sowpaymentplanitemservice.js.map