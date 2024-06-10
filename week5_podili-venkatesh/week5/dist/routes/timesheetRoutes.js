"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const timesheetController_1 = require("../controller/timesheetController");
const authMiddleware_1 = __importDefault(require("../middlewares/authMiddleware"));
const router = (0, express_1.Router)();
router.post('/', authMiddleware_1.default, timesheetController_1.createTimesheet);
router.get('/', authMiddleware_1.default, timesheetController_1.getTimesheets);
exports.default = router;
//# sourceMappingURL=timesheetRoutes.js.map