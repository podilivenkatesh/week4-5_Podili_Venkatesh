"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const database_1 = __importDefault(require("./config/database"));
const organization_1 = __importDefault(require("./routes/organization"));
const client_1 = __importDefault(require("./routes/client"));
const sow_1 = __importDefault(require("./routes/sow"));
const sowpaymentplan_1 = __importDefault(require("./routes/sowpaymentplan"));
const sowpaymentplanitem_1 = __importDefault(require("./routes/sowpaymentplanitem"));
const invoice_1 = __importDefault(require("./routes/invoice"));
const payment_1 = __importDefault(require("./routes/payment"));
const invoicelineitem_1 = __importDefault(require("./routes/invoicelineitem"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use('/organizations', organization_1.default);
app.use('/clients', client_1.default);
app.use('/sows', sow_1.default);
app.use('/sow-payment-plans', sowpaymentplan_1.default);
app.use('/sow-payment-plan-items', sowpaymentplanitem_1.default);
app.use('/invoices', invoice_1.default);
app.use('/payments', payment_1.default);
app.use('/invoiceslineitem', invoicelineitem_1.default);
database_1.default.sync().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
exports.default = app;
//# sourceMappingURL=app.js.map