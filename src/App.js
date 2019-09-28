const Koa = require('koa')
const Router = require('koa-router')

const { scopePerRequest } = require('awilix-koa')

const loggingMiddleware = require('./middleware/logging')



const debug = require('debug')('my-namespace')
const name = 'my-app'
debug('booting %s', name)

const makeContainer = require('./container/container')

const app = new Koa()

const container = makeContainer()
app.use(scopePerRequest(container))
app.use(loggingMiddleware)

const router = new Router()
const apiR = container.resolve('apiRouter')
apiR.initRouter(router)


app.use(router.routes())
app.use(router.allowedMethods())

app.listen(3000)
