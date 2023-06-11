"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Cliente_1 = __importDefault(require("../models/Cliente"));
class ClienteController {
    async list(req, res) {
        try {
            const clientes = await Cliente_1.default.findAll();
            console.log(clientes);
            return res.json(clientes);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    async getById(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente_1.default.findByPk(id);
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente not found' });
            }
            return res.json(cliente);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    async create(req, res) {
        const { nome, email } = req.body;
        try {
            const cliente = await Cliente_1.default.create({ nome, email });
            return res.status(201).json(cliente);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    async update(req, res) {
        const { id } = req.params;
        const { nome, email } = req.body;
        console.log(id, email, nome);
        try {
            const cliente = await Cliente_1.default.findByPk(id);
            console.log(cliente);
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente not found' });
            }
            await cliente.update({ nome, email });
            return res.json(cliente);
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
    async delete(req, res) {
        const { id } = req.params;
        try {
            const cliente = await Cliente_1.default.findByPk(id);
            if (!cliente) {
                return res.status(404).json({ error: 'Cliente not found' });
            }
            await cliente.destroy();
            return res.json({ message: 'Cliente deleted successfully' });
        }
        catch (error) {
            return res.status(500).json({ error: 'Internal server error' });
        }
    }
}
exports.default = new ClienteController();
//# sourceMappingURL=ClienteController.js.map