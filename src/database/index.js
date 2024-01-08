//Configurar a inicialização dos models.

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);


//Todo modelo que for criado precisa ser importado nesse arquivo e inicializado
const Perfil = require('../models/Perfil');
const Usuario = require ('../models/Usuario');
const Cliente = require('../models/Cliente');
const Endereco = require('../models/Endereco');
const Perfil = require('../models/Perfil');
const Prestador = require('../models/Cliente');
const Servico = require('../models/Servico');

//Inicializando o modelo;
Perfil.init(connection);
Usuario.init(connection);
Cliente.init(connection);
Endereco.init(connection);
Status.init(connection);
Prestador.init(connection);
Servico.init(connection);

module.exports = connection;