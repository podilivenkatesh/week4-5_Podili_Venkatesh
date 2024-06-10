"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
const organization_1 = __importDefault(require("./organization"));
class Client extends sequelize_1.Model {
}
Client.init({
    id: {
        type: sequelize_1.DataTypes.STRING,
        primaryKey: true
    },
    organizationId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        references: {
            model: organization_1.default,
            key: 'id'
        }
    },
    msaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    msaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    legalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ndaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    shortName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    ndaValidFrom: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    ndaValidUpto: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    },
    addressId: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    displayName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    isNdaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    isMsaSigned: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false
    },
    msaSignedOn: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false
    }
}, {
    sequelize: database_1.default,
    modelName: 'Client'
});
organization_1.default.hasMany(Client, { foreignKey: 'organizationId' });
Client.belongsTo(organization_1.default, { foreignKey: 'organizationId' });
exports.default = Client;
//# sourceMappingURL=client.js.map