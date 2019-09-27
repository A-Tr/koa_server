const Koa = require('koa')
const Router = require('koa-router')
const HoliService = require('./services/HoliService')
const { asClass, asValue, createContainer, Lifetime } = require('awilix')
const { scopePerRequest } = require('awilix-koa')
const logger = require('./logger/logger')
const awilix = require('awilix')

const container = createContainer().register({
  logger: asClass(logger),
  holiService: asClass(HoliService).scoped()
})

/* const { asClass, Lifetime, createContainer, asFunction } = require('awilix')
const { loadControllers, scopePerRequest } = require('awilix-koa')
const { createController } = require('awilix-router-core')
const api = require('./router/router')
const holiHandler = require('./handlers/holiHandler') */

const app = new Koa()
const router = new Router()

app.use((ctx, next) => {
  console.log('Registering scoped stuff')
  ctx.scope = container.createScope()
  // based on the query string, let's make a user..
  return next()
})

router.get('/holi', ctx => {
  const handle = ctx.scope.resolve('holiService')
  handle.sayHoli(ctx)
})

app.use(router.routes())
app.use(router.allowedMethods())

/* const container = createContainer().register({
  api: asClass(api),
  handler: asClass(holiHandler),
  logger: asFunction(logger)
})
*/

app.listen(3000)
