const mongoose = require('mongoose')

const { Lifetime, RESOLVER } = require('awilix')

const personSchema = {
  name: String,
  age: Number,
  id: String
}

module.exports = () =>  {
  mongoose.connect('mongodb://localhost:27017/koa-db', { useNewUrlParser: true, useUnifiedTopology: true })
  return mongoose.model('Person', personSchema, 'people')
}

module.exports[RESOLVER] = {
  name: 'personModel',
  lifetime: Lifetime.SINGLETON
}
