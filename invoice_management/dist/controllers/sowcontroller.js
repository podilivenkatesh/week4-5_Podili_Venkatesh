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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSOWController = exports.getAllSOWsController = void 0;
const sowservice_1 = require("../services/sowservice");
const getAllSOWsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sows = yield (0, sowservice_1.getAllSOWs)();
        res.json(sows);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});
exports.getAllSOWsController = getAllSOWsController;
const createSOWController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sow = yield (0, sowservice_1.createSOW)(req.body);
        res.status(201).json(sow);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(500).send(error.message);
        }
        else {
            res.status(500).send('An unexpected error occurred');
        }
    }
});
exports.createSOWController = createSOWController;
//# sourceMappingURL=sowcontroller.js.map