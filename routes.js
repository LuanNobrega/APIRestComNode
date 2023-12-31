//Nesse arquivo estará todas as rotas que serão utilizadas no sistema.
const express = require('express');
const routes = express.Router(); //Com esse cara dizemos que esse arquivo é um arquivo de rotas.

const UsuarioController = require('./src/controllers/UsuarioController');
const usuarioService = require('./src/services/usuarioService');
const ClienteController = require('./src/controllers/ClienteController');
const ServicoController = require('./src/controllers/ServicoController');
const PrestadorController = require('./src/controllers/PrestadorController');

//Instaciar um usuário controler para ter acesso a tudo que está dentro dele
const usuarioController = new UsuarioController();
const clienteController = new ClienteController();
const servicoController = new ServicoController();
const prestadorController = new PrestadorController();


//Método interceptador, sempre vai cair aqui primeiro. Intercepta todas as rotas e aqui podemso tomar qualquer ação antes de bater em uma rota específica. 
routes.use(async (req, res, next) => {
    const { authorization } = req.headers;
    let autenticado = await usuarioService.validarAutenticacao(authorization);

    //Para entrar o usuário não pode está autenticado e nem pode estar na url de login.
    if(!autenticado && req.originalUrl != '/login'){
        return res.status(401).json({
            status: 401,
            message: 'Usuário não autorizado',
            name: 'NaoAutorizado'
        })
    }
    next();
})

//Rotas do usuário
routes.post("/login", usuarioController.login);
routes.delete("/logout", usuarioController.logout);
routes.get("/usuarios/:id", usuarioController.obterPorId);
routes.post("/usuarios", usuarioController.cadastrar);
routes.put("/usuariosatualizar/:id", usuarioController.atualizar);

//Rotas de cliente
routes.get("/clientes/:id", clienteController.obterPorId);
routes.post("/clientes", clienteController.cadastrar);
routes.put("/clientes/:id", clienteController.atualizar);
routes.get("/clientes", clienteController.obterTodos);

//Rotas de serviço
routes.get("/servicos/:id", servicoController.obterPorId);
routes.post("/servicos", servicoController.cadastrar);
routes.put("/servicos/:id", servicoController.atualizar);
routes.get("/servicos", servicoController.obterTodos);

//Rotas de prestador
routes.get("/prestadores/:id", prestadorController.obterPorId);
routes.post("/prestadores", prestadorController.cadastrar);
routes.put("/prestadores/:id", prestadorController.atualizar);
routes.get("/prestadores", prestadorController.obterTodos);

module.exports = routes;
