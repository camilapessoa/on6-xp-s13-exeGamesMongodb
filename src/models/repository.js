const mongoose = require('mongoose') //é quem faz a conexão com o bd
mongoose.set('useCreateIndex', true)
const DB_URL = 'mongodb://localhost:27017/exesemana13g'
//string de conexão com o mongodb, vou guardar na variável
//localhost é porque o host é local, 27017 é padrão

const connect = ()=>{ //aqui que a conexão com o db é realizada
  mongoose.connect(DB_URL,{useNewUrlParser:true, useUnifiedTopology:true}) //pra não ficar recebendo erros, parseia a conexão
  const connection = mongoose.connection
  connection.on('err',()=> console.error("Erro ao conectar com MongoDB"))
  connection.once('open',()=> console.log("Estamos conectadas"))

}

module.exports = {
  connect
}

//on e once é do node - Eventos
//base para qualquer conexão com db