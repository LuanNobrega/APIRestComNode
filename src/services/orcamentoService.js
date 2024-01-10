const Orcamento = require('../models/Orcamento');
const OrcamentoItem = require('../models/Orcamentoitem');
const OrcamentoDTO = require('../dtos/OrcamentoDTO');
const OrcamentoItemDTO = require('../dtos/OrcamentoitemDTO');

const {NaoEncontradoErro, AplicacaoErro} = require('../erros/typeErros');

async function obterPorId(id){
    let orcamento = await Orcamento.findByPk(id);
    if(!orcamento){
        throw new NaoEncontradoErro(404, 'Não foi possível encontrar o orcamento com o id ' + id);
    }

    //Pegar todos os itens que tem no orçamento;
    //Para cada item pegar o serviço
    //Para cada item pegar o prestador



    return new ServicoDTO(servico);       
}

async function obterTodos(){
    let servicos = await Servico.findAll();
    return servicos && servicos.map(s => new ServicoDTO(s));
}

async function cadastrar(orcamentoDTO){
    let servico = await Servico.create(servicoDTO);
    
    //Para cada item, salvar o item no banco;
    // Salvar os dados da capa no banco;
    
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