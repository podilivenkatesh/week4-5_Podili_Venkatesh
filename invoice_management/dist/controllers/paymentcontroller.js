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
exports.createPaymentController = exports.getAllPaymentsController = void 0;
const paymentservice_1 = require("../services/paymentservice");
const getAllPaymentsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payments = yield (0, paymentservice_1.getAllPayments)();
        res.json(payments);
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
exports.getAllPaymentsController = getAllPaymentsController;
const createPaymentController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payment = yield (0, paymentservice_1.createPayment)(req.body);
        res.status(201).json(payment);
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
exports.createPaymentController = createPaymentController;
//# sourceMappingURL=paymentcontroller.js.map