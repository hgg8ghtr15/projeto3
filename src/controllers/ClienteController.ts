import { Request, Response } from 'express';
import Cliente from '../models/Cliente';

class ClienteController {
  public async list(req: Request, res: Response): Promise<Response> {
    try {
      const clientes = await Cliente.findAll();
      console.log(clientes)
      return res.json(clientes);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async getById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async create(req: Request, res: Response): Promise<Response> {
    const { nome, email } = req.body;

    try {
      const cliente = await Cliente.create({ nome, email });
      return res.status(201).json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { nome, email } = req.body;
    console.log(id, email, nome);
    try {
      const cliente = await Cliente.findByPk(id);
      console.log(cliente)
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      await cliente.update({ nome, email });
      return res.json(cliente);
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
      const cliente = await Cliente.findByPk(id);
      if (!cliente) {
        return res.status(404).json({ error: 'Cliente not found' });
      }
      await cliente.destroy();
      return res.json({ message: 'Cliente deleted successfully' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal server error' });
    }
  }
}

export default new ClienteController();