import express from 'express';

const router = express.Router();

import { buscarTodos, buscarUm, inserir, alterar, excluir } from './controllers/ClienteController.js';

//tem a função de mostrar todos os clientes.
router.get('/clientes', buscarTodos);
//tem a função de buscar um cliente em específico.
router.get('/cliente/:Id_Cliente', buscarUm);
//insere os dados dos clientes.
router.post('/cliente', inserir);
//altera os dados dos clientes.
router.put('/cliente/:Id_Cliente', alterar);
//exclui os dados dos clientes.
router.delete('/cliente/:Id_Cliente', excluir);


export { router as default};