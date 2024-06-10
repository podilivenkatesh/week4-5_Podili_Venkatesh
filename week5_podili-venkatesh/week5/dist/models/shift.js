"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbconfig_1 = __importDefault(require("../postgresdb/dbconfig"));
const employee_1 = __importDefault(require("./employee"));
class Shift extends sequelize_1.Model {
}
Shift.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
    },
    employeeId: {
        type: sequelize_1.DataTypes.UUID,
        allowNull: false,
        references: {
            model: employee_1.default,
            key: 'id',
        },
    },
    startTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
    },
    endTime: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: true,
    },
    actualHours: {
        type: sequelize_1.DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0,
    },
}, {
    sequelize: dbconfig_1.default,
    modelName: 'Shift',
    tableName: 'shifts',
});
Shift.belongsTo(employee_1.default, { foreignKey: 'employeeId' });
exports.default = Shift;
//# sourceMappingURL=shift.js.map