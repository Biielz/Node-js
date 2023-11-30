// require('dotenv').config({path:'config.env'});

//as importações dos arquivos para o funcionamento do site.
import express from 'express';
import cors from 'cors';

import routes from './routes.js';

const server = express();

//domínio usado para a adição de cabeçalhos HTTP.
server.use(cors());
express.urlencoded({extended:true});

server.use('/api', routes);

//isso mostra se o servidor está ligando e em qual porta ele se localiza.
server.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
})
