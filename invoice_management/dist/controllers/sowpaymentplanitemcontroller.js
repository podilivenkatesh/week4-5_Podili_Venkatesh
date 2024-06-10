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
exports.createSOWPaymentPlanItemController = exports.getAllSOWPaymentPlanItemsController = void 0;
const sowpaymentplanitemservice_1 = require("../services/sowpaymentplanitemservice");
const getAllSOWPaymentPlanItemsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const items = yield (0, sowpaymentplanitemservice_1.getAllSOWPaymentPlanItems)();
        res.json(items);
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
exports.getAllSOWPaymentPlanItemsController = getAllSOWPaymentPlanItemsController;
const createSOWPaymentPlanItemController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const item = yield (0, sowpaymentplanitemservice_1.createSOWPaymentPlanItem)(req.body);
        res.status(201).json(item);
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
exports.createSOWPaymentPlanItemController = createSOWPaymentPlanItemController;
//# sourceMappingURL=sowpaymentplanitemcontroller.js.map