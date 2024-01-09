const ServicoDTO = require('./ServicoDTO');
const PrestadorDTO = require('./PrestadorDTO');

module.exports = class OrcamentoitemDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.idorcamento = obj.idorcamento;
        this.servico = obj.servico && new ServicoDTO(obj.servico);
        this.prestador = obj.prestador && new PrestadorDTO(obj.prestador);
        this.desconto = obj.desconto || 0;
        this.acrescimo = obj.acrescimo || 0;
        this.valor = obj.valor || 0;
        this.valortotal = obj.valortotal || 0;      
        this.observacao = obj.observacao; 
        this.criadoem = obj.criadoem;
        this.atualizadoem = obj.atualizadoem;
    }

    calcularValorTotal(){
        this.valortotal = this.valor + this.acrescimo - this.desconto;
        return this.valortotal;
    }
}