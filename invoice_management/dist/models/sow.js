"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const client_1 = __importDefault(require("./client"));
class SOW extends sequelize_1.Model {
}
SOW.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    invoiceEmailAddresses: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
    customerId: {
        type: sequelize_1.DataTypes.STRING,
        references: {
            model: client_1.default,
            key: 'id'
        }
    },
    customerPONumber: sequelize_1.DataTypes.STRING,
    title: sequelize_1.DataTypes.STRING,
    customerSONumber: sequelize_1.DataTypes.STRING,
    validityPeriod: sequelize_1.DataTypes.JSON,
    totalValue: sequelize_1.DataTypes.FLOAT,
    currency: sequelize_1.DataTypes.STRING,
}, {
    sequelize: database_1.default,
    modelName: 'SOW'
});
client_1.default.hasMany(SOW, { foreignKey: 'customerId' });
SOW.belongsTo(client_1.default, { foreignKey: 'customerId' });
exports.default = SOW;
//# sourceMappingURL=sow.js.map