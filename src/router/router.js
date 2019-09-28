const { Lifetime, RESOLVER } = require('awilix')
const Router = require('koa-router')

module.exports = class ApiRouter {
  constructor({ holiService }) {
    this.holiService = holiService
  }

  createRouter(ctx) {
    const router = new Router()
    router.get('/holi', ctx => {
      const srvc = ctx.state.container.resolve('holiService')
      srvc.sayHoli(ctx)
    })

    return router
  }
}

module.exports[RESOLVER] = {
  name: 'apiRouter',
  lifetime: Lifetime.SCOPED
}
