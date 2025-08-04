import express, { Application } from 'express';
import cors from 'cors';
import { connectToMongo } from './database/mongoConnect';

import bibliotecaRoutes from './routes/biblioteca-routes';
import adminRoutes from './routes/user-routes';

const app: Application = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.use(bibliotecaRoutes);
app.use(adminRoutes);

if (process.env.NODE_ENV !== 'test') {
    const URI = process.env.MONGO_URI;
    if(!URI){
        throw new Error(' a variavel não está definida')
    }
    connectToMongo(URI); 
}

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;