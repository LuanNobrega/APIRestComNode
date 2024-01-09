module.exports = class ServicoDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.descricao = obj.descricao; 
        this.observacao = obj.observacao;
        this.valor = obj.valor || 0;      
        this.criadoem = obj.criadoem;
        this.atualizadoem = obj.atualizadoem;
    }
}