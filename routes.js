//Nesse arquivo estará todas as rotas que serão utilizadas no sistema.
const express = require('express');
const routes = express.Router(); //Com esse cara dizemos que esse arquivo é um arquivo de rotas.

const UsuarioController = require('./src/controllers/UsuarioController');

//Instaciar um usuário controler para ter acesso a tudo que está dentro dele
const usuarioController = new UsuarioController();

//Rotas do usuário
routes.post("/usuarios", usuarioController.login);
routes.get("/usuarios/:id", usuarioController.obter)

module.exports = routes;
