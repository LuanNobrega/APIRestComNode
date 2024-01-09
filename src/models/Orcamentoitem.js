//Modelo que iremos usar no projeto, classe que o sequelize irá usar para acessar o banco de dados. 

const {Model, DataTypes} = require('sequelize');

//Todos os modelos terão um método init para que o sequelize se ache e faça o trabalho dele corretamente.
class Orcamentoitem extends Model {
    static init(connection){
        super.init({
            idorcamento: DataTypes.BIGINT,
            idservico: DataTypes.BIGINT,
            idprestador: DataTypes.BIGINT,
            desconto: DataTypes.DOUBLE,
            acrescimo: DataTypes.DOUBLE,
            valor: DataTypes.DOUBLE,
            valortotal: DataTypes.DOUBLE,
            observacao: DataTypes.TEXT  
        },{
            sequelize: connection,
            schema: 'public',
            tableName: 'orcamentoitem',
            criadoem: 'criadoem',
            atualizadoem: 'atualizadoem',
            timestamps: true,
            underscore: false
        });
    }
}

module.exports = Orcamentoitem;