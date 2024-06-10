"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Organization extends sequelize_1.Model {
}
Organization.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    gstNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    panNo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    legalOrganizationName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    invoiceTemplateId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    contactName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
}, {
    sequelize: database_1.default,
    modelName: 'Organization'
});
exports.default = Organization;
//# sourceMappingURL=organization.js.map