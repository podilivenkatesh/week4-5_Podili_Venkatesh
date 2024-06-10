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
exports.createOrganizationController = exports.getAllOrganizationsController = void 0;
const organizationservice_1 = require("../services/organizationservice");
const getAllOrganizationsController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organizations = yield (0, organizationservice_1.getAllOrganizations)();
        res.json(organizations);
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
exports.getAllOrganizationsController = getAllOrganizationsController;
const createOrganizationController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const organization = yield (0, organizationservice_1.createOrganization)(req.body);
        res.status(201).json(organization);
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
exports.createOrganizationController = createOrganizationController;
//# sourceMappingURL=organizationcontroller.js.map