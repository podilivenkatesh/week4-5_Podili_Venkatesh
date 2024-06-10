"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const sowpaymentplan_1 = __importDefault(require("./sowpaymentplan"));
class SOWPaymentPlanItem extends sequelize_1.Model {
}
SOWPaymentPlanItem.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    sowPaymentPlanId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: sowpaymentplan_1.default,
            key: 'id'
        }
    },
    sowId: sequelize_1.DataTypes.STRING,
    orderId: sequelize_1.DataTypes.STRING,
    particular: sequelize_1.DataTypes.STRING,
    rate: sequelize_1.DataTypes.FLOAT,
    unit: sequelize_1.DataTypes.INTEGER,
    total: sequelize_1.DataTypes.FLOAT,
}, {
    sequelize: database_1.default,
    modelName: 'SOWPaymentPlanItem'
});
sowpaymentplan_1.default.hasMany(SOWPaymentPlanItem, { foreignKey: 'sowPaymentPlanId' });
SOWPaymentPlanItem.belongsTo(sowpaymentplan_1.default, { foreignKey: 'sowPaymentPlanId' });
exports.default = SOWPaymentPlanItem;
//# sourceMappingURL=sowpaymentplanitem.js.map