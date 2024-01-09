//Modelo que iremos usar no projeto, classe que o sequelize irá usar para acessar o banco de dados. 

const {Model, DataTypes} = require('sequelize');

//Todos os modelos terão um método init para que o sequelize se ache e faça o trabalho dele corretamente.
class Orcamento extends Model {
    static init(connection){
        super.init({
            descricao: DataTypes.STRING, //Não apsseo o id e os "dates" pois o sequelize já entendem eles
            idcliente: DataTypes.BIGINT,
            desconto: DataTypes.DOUBLE,
            acrescimo: DataTypes.DOUBLE,
            valortotal: DataTypes.DOUBLE,
            observacao: DataTypes.TEXT  
        },{
            sequelize: connection,
            schema: 'public',
            tableName: 'orcamentos',
            criadoem: 'criadoem',
            atualizadoem: 'atualizadoem',
            timestamps: true,
            underscore: false
        });
    }
}

module.exports = Orcamento;