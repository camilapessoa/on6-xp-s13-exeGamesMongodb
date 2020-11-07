const mongoose = require('mongoose')
const Schema = mongoose.Schema

//dizer o que vai ter no bd e quais suas particularidades


//quais vão ser os atributos no schema, Id, dizer o tipo dele e se é obrigatório ou não
const gamesSchema = new Schema({
  _id:{
    type: mongoose.Schema.Types.ObjectId, //tipo de dado
    auto: true, //autogerado?
    required: true //é obrigatório?
  },
  id:{
    type: Number,
    required: true
  },
  name:{
    type: String,
    required: true,
    
  },
  genre:{
    type: String,
    required: true,
    unique: false
  },

  plataforms:{
    type: String,
    required:true
  },

  first_release_date:{
    type: Number,
    required: false,
  },

  slug: {
    type: String,
    required: false
  },

  summary: {
    type: String,
    required: true
  },

  company:{
    type: String,
    required: false
  },

  cover:{
    type: String,
    required: true,
    unique: true
  }

//qual tipo de dado que está recebendo

})

const gamesCollection = mongoose.model('exesemana13g',gamesSchema)

module.exports = { 
  gamesCollection
}