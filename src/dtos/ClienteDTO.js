const { ModeloInvalidoErro } = require("../erros/typeErros");
const EnderecoDTO = require('./EnderecoDTO');

module.exports = class ClienteDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.nome = obj.nome;
        this.email = obj.email;
        this.cpfoucnpj = obj.cpfoucnpj;
        this.telefone = obj.telefone;      
        this.enderecos =obj.enderecos && obj.enderecos.map(e => new EnderecoDTO(e)) || []; 
        this.created_at = obj.created_at;
        this.updated_at = obj.updated_at;
    }

    modeloValidoCadastro(){
        let valido = !!(this.nome);
        if(!valido){
            throw new ModeloInvalidoErro(400, 'O nome é obrigatório para cadastro.')
        }
    }
}