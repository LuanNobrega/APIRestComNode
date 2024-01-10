const Servico = require('../models/Servico');
const ServicoDTO = require('../dtos/ServicoDTO');

const {NaoEncontradoErro, AplicacaoErro} = require('../erros/typeErros');

async function obterPorId(id){
    let servico = await Servico.findByPk(id);
    if(!servico){
        throw new NaoEncontradoErro(404, 'Não foi possível encontrar o servico com o id ' + id);
    }
    return new ServicoDTO(servico);       
}

async function obterTodos(){
    let servicos = await Servico.findAll();
    return servicos && servicos.map(s => new ServicoDTO(s));
}

async function cadastrar(servicoDTO){
    let servico = await Servico.create(servicoDTO);
    if(!servico){
        throw new AplicacaoErro(500, 'Não foi possível cadastrar o serviço.')
    }   
    return new ServicoDTO(servico);
}

async function atualizar(servicoDTO){
    //Verificar se ele existe no banco
    let servico = await Servico.findByPk(servicoDTO.id);
    if(!servico){
        throw new NaoEncontradoErro(404, 'Não foi possível encontrar um serviço com id ' + servicoDTO.id);
    }
    let atualizado = await Servico.update(servicoDTO, { where: {id: servicoDTO.id}});
    if(!atualizado){
        throw new AplicacaoErro(500, 'Não foi possível atualizar o serviçoe.')
    }
    return servicoDTO;
}

module.exports = {cadastrar, atualizar, obterPorId, obterTodos};