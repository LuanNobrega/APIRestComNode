const OrcamentoItemDTO = require('./OrcamentoitemDTO');
const ClienteDTO = require('./ClienteDTO');

module.exports = class OrcamentoDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.descricao = obj.descricao;
        this.cliente = obj.cliente && new ClienteDTO(obj.cliente);
        this.itens = obj.itens && obj.itens.map(item => new OrcamentoItemDTO(item)) || [];
        this.observacao = obj.observacao;
        this.desconto = obj.desconto || 0;
        this.acrescimo = obj.acrescimo || 0;
        this.valortotal = obj.valortotal || 0;      
        this.criadoem = obj.criadoem;
        this.atualizadoem = obj.atualizadoem;
    }
}