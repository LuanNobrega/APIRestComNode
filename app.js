//Arquivo principal da aplicação
const app = require('./src/config/server');
const porta = process.env.PORTA;

//Levantar a aplicação
app.listen(porta, () => console.log('Api rodando na porta '+porta));