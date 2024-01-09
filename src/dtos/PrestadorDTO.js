const { ModeloInvalidoErro } = require("../erros/typeErros");

module.exports = class PrestadorDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.email = obj.email;
        this.cpfoucnpj = obj.cpfoucnpj;
        this.telefone = obj.telefone;  
        this.observacao = obj.observacao;    
        this.criadoem = obj.criadoem;
        this.atualizadoem = obj.atualizadoem;
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