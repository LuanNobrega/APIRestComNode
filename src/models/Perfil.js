//Modelo que iremos usar no projeto, classe que o sequelize irá usar para acessar o banco de dados. 

const {Model, DataTypes} = require('sequelize');

//Todos os modelos terão um método init para que o sequelize se ache e faça o trabalho dele corretamente.
class Perfil extends Model {
    static init(connection){
        super.init({
            descricao: DataTypes.STRING //Não apsseo o id e os "dates" pois o sequelize já entendem eles 
        },{
            sequelize: connection,
            schema: 'public',
            tableName: 'perfis',
            createdAt: 'createAt',
            updatedAt: 'updateAt',
            timestamps: true,
            underscore: false
        });
    }
}

module.exports = Perfil;