"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { DB_PROTOCOL, DB_USERNAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME, } = process.env;
const DATABASE_URL = `${DB_PROTOCOL}://${DB_USERNAME}:${encodeURIComponent(DB_PASSWORD)}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const sequelize = new sequelize_1.Sequelize(DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {},
});
// export default sequelize;
sequelize.authenticate()
    .then(() => {
    console.log('Database connection established successfully.');
})
    .catch((err) => {
    console.error('Unable to connect to the database:', err);
});
sequelize.sync()
    .then(() => {
    console.log('Models synchronized with the database.');
})
    .catch((err) => {
    console.error('Unable to synchronize models with the database:', err);
});
exports.default = sequelize;
//# sourceMappingURL=dbconfig.js.map