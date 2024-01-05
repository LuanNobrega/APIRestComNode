module.exports = class PerfilDTO{
    constructor(obj){
        obj = obj || {};
        this.id = obj.id;
        this.descricao = obj.descricao;       
        this.createAt = obj.createAt;
        this.updateAt = obj.updateAt;
    }
}