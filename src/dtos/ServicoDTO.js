const {ModeloInvalidoErro} = require('../erros/typeErros');

module.exports = class ServicoDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.descricao = obj.descricao; 
        this.observacao = obj.observacao;
        this.valor = obj.valor || 0;      
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    modeloValidoCadastro(){
        this._validarModelo();
    }

    modeloValidoAtualizacao(){
        this._validarModelo();
    }

    _validarModelo(){
        let valido = !!(this.descricao && this.valor);
        if(!valido){
            throw new ModeloInvalidoErro(400, 'Os campos descrição e valor são obrigatórios.')
        }
    }
}