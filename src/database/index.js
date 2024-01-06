//Configurar a inicialização dos models.

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);


//Todo modelo que for criado precisa ser importado nesse arquivo e inicializado
const Perfil = require('../models/Perfil');
const Usuario = require ('../models/Usuario');
const Cliente = require('../models/Cliente');
const Endereco = require('../models/Endereco');

//Inicializando o modelo;
Perfil.init(connection);
Usuario.init(connection);
Cliente.init(connection);
Endereco.init(connection);

module.exports = connection;