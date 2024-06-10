"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const invoice_1 = __importDefault(require("./invoice"));
class Payment extends sequelize_1.Model {
}
Payment.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    paymentDate: sequelize_1.DataTypes.DATE,
    forExAmount: sequelize_1.DataTypes.FLOAT,
    currency: sequelize_1.DataTypes.STRING,
    indianAmount: sequelize_1.DataTypes.FLOAT,
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: invoice_1.default,
            key: 'id'
        }
    },
    isFullPayment: sequelize_1.DataTypes.BOOLEAN,
    bankPaymentDetails: sequelize_1.DataTypes.JSON,
}, {
    sequelize: database_1.default,
    modelName: 'Payment'
});
invoice_1.default.hasMany(Payment, { foreignKey: 'invoiceId' });
Payment.belongsTo(invoice_1.default, { foreignKey: 'invoiceId' });
exports.default = Payment;
//# sourceMappingURL=payment.js.map