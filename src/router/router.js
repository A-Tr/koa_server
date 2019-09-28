const { Lifetime, RESOLVER } = require('awilix')

const { makeInvoker } = require('awilix-koa')

module.exports = class MakeApi {
  makeApi({ holiService, logger }) {
    return {
      getHoli: ctx => {
        holiService.sayHoli(ctx)
      },
      writeHoli: ctx => {
        holiService.writeHoli(ctx, logger)
      }
    }
  }

  initRouter(router) {
    const api = makeInvoker(this.makeApi)
    router.get('/holi', api('getHoli'))
    router.post('/holi', api('writeHoli'))
  }
}

module.exports[RESOLVER] = {
  name: 'apiRouter',
  lifetime: Lifetime.SCOPED
}
