"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const sow_1 = __importDefault(require("./sow"));
class SOWPaymentPlan extends sequelize_1.Model {
}
SOWPaymentPlan.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    sowId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: sow_1.default,
            key: 'id'
        }
    },
    orderId: sequelize_1.DataTypes.STRING,
    plannedInvoiceDate: sequelize_1.DataTypes.DATE,
    totalActualAmount: sequelize_1.DataTypes.FLOAT,
}, {
    sequelize: database_1.default,
    modelName: 'SOWPaymentPlan'
});
sow_1.default.hasMany(SOWPaymentPlan, { foreignKey: 'sowId' });
SOWPaymentPlan.belongsTo(sow_1.default, { foreignKey: 'sowId' });
exports.default = SOWPaymentPlan;
//# sourceMappingURL=sowpaymentplan.js.map