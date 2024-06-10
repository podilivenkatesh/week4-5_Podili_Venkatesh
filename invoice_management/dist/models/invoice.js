"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const sowpaymentplan_1 = __importDefault(require("./sowpaymentplan"));
class Invoice extends sequelize_1.Model {
}
Invoice.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    totalInvoiceValue: sequelize_1.DataTypes.FLOAT,
    sowId: sequelize_1.DataTypes.STRING,
    status: sequelize_1.DataTypes.STRING,
    invoiceSentOn: sequelize_1.DataTypes.DATE,
    customerId: sequelize_1.DataTypes.STRING,
    paymentReceivedOn: sequelize_1.DataTypes.DATE,
    invoiceVersionNumber: sequelize_1.DataTypes.STRING,
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: sowpaymentplan_1.default,
            key: 'id'
        }
    },
    invoiceAmount: sequelize_1.DataTypes.FLOAT,
    invoiceTaxAmount: sequelize_1.DataTypes.FLOAT,
}, {
    sequelize: database_1.default,
    modelName: 'Invoice'
});
sowpaymentplan_1.default.hasMany(Invoice, { foreignKey: 'sowPaymentPlanId' });
Invoice.belongsTo(sowpaymentplan_1.default, { foreignKey: 'sowPaymentPlanId' });
exports.default = Invoice;
//# sourceMappingURL=invoice.js.map