"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// import { config} from '../postgresdb/pgConfig';
const userModel_1 = require("../models/userModel");
const credentials_1 = __importDefault(require("../common/credentials"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, 10);
        const user = {
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword
        };
        userModel_1.users.push(user);
        console.log(userModel_1.users);
        res.send(user);
    }
    catch (err) {
        res.send(err);
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = userModel_1.users.find(u => u.username === req.body.username);
        if (!user) {
            return res.status(400).send('User does not exist');
        }
        const confirm = yield bcrypt_1.default.compare(req.body.password, user.password);
        if (confirm) {
            const token = jsonwebtoken_1.default.sign(user, credentials_1.default.postgres.Jwtkey);
            console.log(token);
            res.send({ token });
        }
        else {
            res.status(400).send('Invalid password');
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.login = login;
//# sourceMappingURL=userController.js.map