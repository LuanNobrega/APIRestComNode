//Configurar a inicialização dos models.

const Sequelize = require('sequelize');
const dbConfig = require('../config/database');
const connection = new Sequelize(dbConfig);


//Todo modelo que for criado precisa ser importado nesse arquivo e inicializado
const Perfil = require('../models/Perfil');
const Usuario = require ('../models/Usuario');
const Cliente = require('../models/Cliente');
const Endereco = require('../models/Endereco');
const Status = require('../models/Status');
const Prestador = require('../models/Cliente');
const Servico = require('../models/Servico');
const Orcamento = require('../models/Orcamento');
const Orcamentoitem = require('../models/Orcamentoitem');

//Inicializando o modelo;
Perfil.init(connection);
Usuario.init(connection);
Cliente.init(connection);
Endereco.init(connection);
Status.init(connection);
Prestador.init(connection);
Servico.init(connection);
Orcamento.init(connection);
Orcamentoitem.init(connection);

module.exports = connection;