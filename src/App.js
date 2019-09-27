const Koa = require('koa')
const { asClass, Lifetime, createContainer, asFunction } = require('awilix')
const { loadControllers, scopePerRequest } = require('awilix-koa')
const { createController } =require( 'awilix-router-core')
const api = require('./router/router')
const logger = require('./logger/index')
const holiHandler = require('./handlers/holiHandler')

const app = new Koa()
const container = createContainer().register({
  api: asClass(api),
  handler: asClass(holiHandler),
  logger: asFunction(logger)
})

const router = createController(api)
router.get('/holi', )
app.use(scopePerRequest(container))
app// Loads all controllers in the `routes` folder
// relative to the current working directory.
// This is a glob pattern.
//router.get('/api/users/:id', container.resolve('userController').getUser)
app.listen(3000)
