//Modelo que iremos usar no projeto, classe que o sequelize irá usar para acessar o banco de dados. 

const {Model, DataTypes} = require('sequelize');

//Todos os modelos terão um método init para que o sequelize se ache e faça o trabalho dele corretamente.
class Usuario extends Model {
    static init(connection){
        super.init({
            nome: DataTypes.STRING, //Não apsseo o id e os "dates" pois o sequelize já entendem eles 
            email: DataTypes.STRING,
            senha: DataTypes.TEXT,
            idPerfil: DataTypes.BIGINT,
            dataInativacao: DataTypes.DATE
        },{
            sequelize: connection,
            schema: 'public',
            tableName: 'usuarios',
            createAt: 'criadoEm',
            updateAt: 'atualizadoEm',
            timestamps: true,
            underscored: false
        });
    }
}

module.exports = Usuario;