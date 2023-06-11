"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ClienteController_1 = __importDefault(require("../controllers/ClienteController"));
const router = (0, express_1.Router)();
router.get('/clientes', ClienteController_1.default.list);
router.get('/clientes/:id', ClienteController_1.default.getById);
router.post('/clientes', ClienteController_1.default.create);
router.put('/clientes/:id', ClienteController_1.default.update);
router.delete('/clientes/:id', ClienteController_1.default.delete);
exports.default = router;
//# sourceMappingURL=clientesRoutes.js.map