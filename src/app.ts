import express, { Application, Request, Response } from 'express';
import clientesRoutes from './routes/clientesRoutes';

const app: Application = express();
const port = 3000;

app.use(express.json());
app.use(clientesRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('API funcionando');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});