import express, { Application } from 'express';
import cors from 'cors';

import bibliotecaRoutes from './routes/biblioteca-routes';
import adminRoutes from './routes/user-routes';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(bibliotecaRoutes);
app.use(adminRoutes);


app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;