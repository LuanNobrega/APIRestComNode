const Cliente = require('../models/Cliente');
const Endereco = require('../models/Endereco');
const ClienteDTO = require('../dtos/ClienteDTO');
const EnderecoDTO = require('../dtos/EnderecoDTO');
const {NaoAutorizadoErro, NaoEncontradoErro, AplicacaoErro} = require('../erros/typeErros');

async function obterPorId(id){
    let cliente = await Cliente.findByPk(id);
    if(!cliente){
        throw new NaoEncontradoErro(404, 'Não foi possível encontrar o cliente com o id ' + id);
    }
    cliente = new ClienteDTO(cliente);
    let enderecos = await Endereco.findAll({ where: { idCliente: id }});

    cliente.enderecos = enderecos.map(e => new EnderecoDTO(e));
    return cliente;
}

async function cadastrar(clienteDTO){
    let cliente = await Cliente.create(clienteDTO);
    if(!cliente){
        throw new AplicacaoErro(500, 'Não foi possível cadastrar o cliente.')
    }
    let enderecos = [];

    //"for in" pega o indice
    //"for of" pega o valor
    for(var endereco of clienteDTO.enderecos){
        endereco.idCliente = parseInt(cliente.id);
        let novoEndereco = await Endereco.create(endereco);
        enderecos.push(new EnderecoDTO(novoEndereco));
    }

    cliente = new ClienteDTO(cliente);
    cliente.endereco = enderecos;
    return cliente;

}

async function atualizar(clienteDTO){
    //Verificar se ele existe no banco
    let cliente = await Cliente.findByPk(clienteDTO.id);
    if(cliente){
        throw new NaoEncontradoErro(404, 'Não foi possível encontrar um cliente com id ' + clienteDTO.id);
    }
    let atualizado = await Cliente.update(clienteDTO, { where: {id: clienteDTO.id}});
    if(!atualizado){
        throw new AplicacaoErro(500, 'Não foi possível atualizar o cliente.')
    }

    let enderecos = [];

    for(var endereco in clienteDTO.enderecos){
        let atualizado = await Endereco.update(endereco, { where: { id: endereco.id }});
        enderecos.push(new EnderecoDTO(atualizado));
    }
    clienteDTO.enderecos = enderecos;
    return clienteDTO;
}

module.exports = {cadastrar, atualizar, obterPorId};