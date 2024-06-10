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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSOWPaymentPlanController = exports.getAllSOWPaymentPlansController = void 0;
const sowpaymentplanservice_1 = require("../services/sowpaymentplanservice");
const getAllSOWPaymentPlansController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plans = yield (0, sowpaymentplanservice_1.getAllSOWPaymentPlans)();
        res.json(plans);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});
exports.getAllSOWPaymentPlansController = getAllSOWPaymentPlansController;
const createSOWPaymentPlanController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const plan = yield (0, sowpaymentplanservice_1.createSOWPaymentPlan)(req.body);
        res.status(201).json(plan);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});
exports.createSOWPaymentPlanController = createSOWPaymentPlanController;
//# sourceMappingURL=sowpaymentplancontroller.js.map