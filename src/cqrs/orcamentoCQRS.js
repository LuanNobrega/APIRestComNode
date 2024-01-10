//Arquivo que vai saber fazer as consultas no banco de dados de uma maneira mais inteligente, mais escalonável.

//Importar o sequelize, pois ele conhece todas as tabelas.
const sequelize = require('../database/index');

const OrcamentoDTO = require('../dtos/OrcamentoDTO');
const ClienteDTO = require('../dtos/ClienteDTO');
const OrcamentoItemDTO = require('../dtos/OrcamentoitemDTO');
const PrestadorDTO = require('../dtos/PrestadorDTO');
const ServicoDTO = require('../dtos/ServicoDTO');
const StatusDTO = require('../dtos/StatusDTO');
const UsuarioDTO = require('../dtos/usuarioDTO');

const sql = '';

async function obterOrcamentos(){
    let orcamentos = await sequelize.query(sql);
    orcamentos = orcamentos[0];
}

async function obterOrcamento(idOrcamento){
    let where = `O.id = ${idOrcamento}`;
    let orcamentos = await sequelize.query(`${sql} ${where}`)
}

module.exports = {obterAtendimentos, obterAtendimento}





