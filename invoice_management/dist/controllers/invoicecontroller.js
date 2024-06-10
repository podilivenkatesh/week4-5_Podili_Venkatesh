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
exports.createInvoiceController = exports.getAllInvoicesController = void 0;
const invoiceservice_1 = require("../services/invoiceservice");
const getAllInvoicesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoices = yield (0, invoiceservice_1.getAllInvoices)();
        res.json(invoices);
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
exports.getAllInvoicesController = getAllInvoicesController;
const createInvoiceController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const invoice = yield (0, invoiceservice_1.createInvoice)(req.body);
        res.status(201).json(invoice);
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
exports.createInvoiceController = createInvoiceController;
//# sourceMappingURL=invoicecontroller.js.map