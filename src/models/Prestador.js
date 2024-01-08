//Modelo que iremos usar no projeto, classe que o sequelize irá usar para acessar o banco de dados. 

const {Model, DataTypes} = require('sequelize');

//Todos os modelos terão um método init para que o sequelize se ache e faça o trabalho dele corretamente.
class Prestador extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING, //Não apsseo o id e os "dates" pois o sequelize já entendem eles
            email: DataTypes.STRING,
            telefone: DataTypes.STRING,  
            cpfoucnpj: DataTypes.STRING,
            observacao: DataTypes.TEXT  
        },{
            sequelize: connection,
            schema: 'public',
            tableName: 'prestadores',
            createdat: 'createdat',
            updatedat: 'updatedat',
            timestamps: true,
            underscore: false
        });
    }
}

module.exports = Prestador;