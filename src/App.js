const Koa = require('koa')
const Router = require('koa-router')

const { scopePerRequest } = require('awilix-koa')

const loggingMiddleware = require('./middleware/logging')


const makeContainer = require('./container/container')

const app = new Koa()

const container = makeContainer()

const bodyParser = require('body-parser')


const router = new Router()
const apiR = container.resolve('apiRouter')
apiR.initRouter(router)


//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({ extended: false }))
app.use(scopePerRequest(container))
app.use(loggingMiddleware)

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(process.env.port || 3000)
