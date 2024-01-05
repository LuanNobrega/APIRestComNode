//Configuração do servidor
require('dotenv').config();
require('../database');

const express = require('express');
const cors = require('cors');
const routes = require("../../routes");
const app = express();

//para fazer requisições de qualquer lugar, a API não critique a rota;
app.use(cors());
//Para indicar que toda requisição que vinher, venha como JSON e com limite de 50 mega bytes.
app.use(express.json({limit: '50mb'}));
app.use(routes);

module.exports = app;
