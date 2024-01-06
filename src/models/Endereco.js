//Modelo que iremos usar no projeto, classe que o sequelize irá usar para acessar o banco de dados. 

const {Model, DataTypes} = require('sequelize');

//Todos os modelos terão um método init para que o sequelize se ache e faça o trabalho dele corretamente.
class Endereco extends Model {
    static init(connection){
        super.init({
            idCliente: DataTypes.BIGINT,
            cep: DataTypes.STRING, //Não apsseo o id e os "dates" pois o sequelize já entendem eles
            rua: DataTypes.STRING,
            numero: DataTypes.STRING,
            complemento: DataTypes.STRING,
            bairro: DataTypes.STRING,
            cidade: DataTypes.STRING,
            uf: DataTypes.STRING
        },{
            sequelize: connection,
            schema: 'public',
            tableName: 'enderecos',
            created_at: 'created_at',
            updated_at: 'updated_at',
            timestamps: true,
            underscore: false
        });
    }
}

module.exports = Endereco;