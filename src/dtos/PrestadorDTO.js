const { ModeloInvalidoErro } = require("../erros/typeErros");

module.exports = class PrestadorDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id || null;
        this.nome = obj.nome || null;
        this.email = obj.email || null;
        this.cpfoucnpj = obj.cpfoucnpj || null;
        this.telefone = obj.telefone || null;
        this.observacao = obj.observacao || null;
        this.criadoem = obj.criadoem || null;
        this.atualizadoem = obj.atualizadoem || null;
    }

    modeloValidoCadastro(){
        this._validarModelo();
    }

    modeloValidoAtualizacao(){
        this._validarModelo();
    }

    _validarModelo(){
        let valido = !!(this.nome);
        if(!valido){
            throw new ModeloInvalidoErro(400, 'O nome é obrigatório para cadastro.')
        }
    }
}