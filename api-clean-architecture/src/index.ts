import express, { Application } from 'express';
import cors from 'cors';
import { connectToMongo } from './database/mongoConnect';
import { config } from './config/environment';

import bibliotecaRoutes from './routes/biblioteca-routes';
import adminRoutes from './routes/user-routes';

const app: Application = express();
const PORT = config.port;

app.use(express.json());
app.use(cors());

app.use(bibliotecaRoutes);
app.use(adminRoutes);

if (process.env.NODE_ENV !== 'test') {
    const URL = config.mongo_url;
    if(!URL){
        throw new Error(' a variavel não está definida!')
    }
    connectToMongo(URL); 
}

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

export default app;