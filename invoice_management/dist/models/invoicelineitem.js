"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const invoice_1 = __importDefault(require("./invoice"));
class InvoiceLineItem extends sequelize_1.Model {
}
InvoiceLineItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    invoiceId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: invoice_1.default,
            key: 'id'
        }
    },
    orderNo: sequelize_1.DataTypes.STRING,
    particular: sequelize_1.DataTypes.STRING,
    rate: sequelize_1.DataTypes.FLOAT,
    unit: sequelize_1.DataTypes.INTEGER,
    total: sequelize_1.DataTypes.FLOAT,
}, {
    sequelize: database_1.default,
    modelName: 'InvoiceLineItem'
});
invoice_1.default.hasMany(InvoiceLineItem, { foreignKey: 'invoiceId' });
InvoiceLineItem.belongsTo(invoice_1.default, { foreignKey: 'invoiceId' });
exports.default = InvoiceLineItem;
//# sourceMappingURL=invoicelineitem.js.map