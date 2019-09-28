const Koa = require('koa')
const Router = require('koa-router')
const HoliService = require('./services/HoliService')
const { asClass, asValue, asFunction, createContainer, Lifetime } = require('awilix')
const { scopePerRequest } = require('awilix-koa')
const uuidv4 = require('uuid/v4');

const loggerBuilder = require('./logger/logger')
const awilix = require('awilix')

const container = createContainer().register({
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
  const logger = loggerBuilder(uuidv4(), ctx.ip)
  logger.info(`Creating scope for request: ${ctx.ip}`)
  ctx.scope = container.createScope().register({
    logger: asValue(logger),
  })

  
  // based on the query string, let's make a user..
  return next()
})

router.get('/holi', ctx => {
  const handle = ctx.scope.resolve('holiService')
  return handle.sayHoli(ctx)
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
