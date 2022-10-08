module.exports = {
    host:'127.0.0.1',
    username:'root',
    password:'',
    database:'mydb',
    dialect:'mysql',
    define:{
        timestamps:true, // força que tenha os campos creat_at e updated_at nas tabelas
        underscored:true, // cria tabelas com o formado de _ 
        underscoredAll:true // userEmail = user_email
    }

}