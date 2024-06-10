"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const credentials = {
    postgres: {
        USERNAME: process.env.USER || "postgres",
        DATABASE: process.env.DATABASE || "postgresql2",
        HOST: process.env.HOST_NAME || "localhost",
        PASSWORD: process.env.PASSWORD || "Venky@15",
        DBPORT: Number(process.env.PORTNAME) || 5432,
        Jwtkey: process.env.JWT_KEY || 'pv987654321',
    }
};
exports.default = credentials;
//# sourceMappingURL=credentials.js.map