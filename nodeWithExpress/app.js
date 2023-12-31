import express from 'express';
import {routes} from './routes/index.js';

const app = express();

app.use(express.json());

app.use(routes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado 🤯')
})

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000')
})