import { Router } from 'express';
import ClienteController from '../controllers/ClienteController';

const router = Router();

router.get('/clientes', ClienteController.list);
router.get('/clientes/:id', ClienteController.getById);
router.post('/clientes', ClienteController.create);
router.put('/clientes/:id', ClienteController.update);
router.delete('/clientes/:id', ClienteController.delete);

export default router;