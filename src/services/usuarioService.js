const Usuario = require('../models/Usuario')
const {NaoAutorizadoErro} = require('../erros/typeErros')
const geradorToken = require('../utils/geradorToken')
const usuarioCache = require('../cache/usuarioCache') 

async function validarUsuario(email, senha){

    //1° Verificar se esse usuario existe em nosso banco de dados
    email = email.toString().toLowerCase();
    let usuario = await Usuario.findOne({ where: { email }});
    senha = geradorToken.gerarHashDaSenha(senha);
    //Gerar um hash da senha
    //2°Preciso saber se a senha que ele passou é a correta
    //Se estiver errada, eu mando uma mensagem de usuario e senhas invalidos
    if(!usuario || (usuario.senha != senha)){
        throw new NaoAutorizadoErro(401, "Usuário ou senha inválidos");
    }

    // Eu vou gerar um token, uma credencial e enviar para o usuario
    let credencial = _criarCredencial(usuario);

    return credencial;       

}

//Função privada
function _criarCredencial(usuario){

    let dataExpiracao = geradorToken.gerarDataexpiracao();

    let credencial = usuarioCache.obterCredendial(usuario);

    if(credencial){
        if(credencial.dataExpiracao < new Date()){
            usuarioCache.removerNoCache(credencial.token);
        }else{
            usuarioCache.atualizarDataExpiracao(credencial.token, dataExpiracao);
            return credencial;
        }
    }

    let token = geradorToken.criarToken(usuario);
    usuario.senha = undefined;
    credencial = { token, usuario, dataExpiracao}
    usuarioCache.adicionarNoCache(credencial);
    return credencial;
}

module.exports = {validarUsuario};