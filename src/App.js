const Koa = require('koa')
const Router = require('koa-router')
const HoliController = require('./router/HoliController')
const { asClass, asValue, createContainer, Lifetime } = require('awilix')
const { scopePerRequest } = require('awilix-koa')
const logger = require('./logger/logger')

const container = createContainer().register({
  holiController: asClass(HoliController, { lifetime: Lifetime.SINGLETON }),
  logger: asValue(logger, { lifetime: Lifetime.SINGLETON })
})

/* const { asClass, Lifetime, createContainer, asFunction } = require('awilix')
const { loadControllers, scopePerRequest } = require('awilix-koa')
const { createController } = require('awilix-router-core')
const api = require('./router/router')
const holiHandler = require('./handlers/holiHandler') */

const app = new Koa()
const router = new Router()

router.get('/holi', container.resolve('holiController').sayHoli)
app.use(router.routes())
const logggg = container.resolve('logger');

logggg.info('holi')
/* const container = createContainer().register({
  api: asClass(api),
  handler: asClass(holiHandler),
  logger: asFunction(logger)
})
*/

app.listen(3000)
