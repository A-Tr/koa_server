const { Lifetime, RESOLVER } = require('awilix')

const { makeInvoker } = require('awilix-koa')

module.exports = class ApiRouter {
  constructor({ personController }) {
    this.controllers = [personController]
  }

  initRouter(router) {
    for (let i = 0; i < this.controllers.length; i++) {
      const api = makeInvoker(this.controllers[i].build)
      const endpoints = this.controllers[i].getEndpoints()

      for (let j = 0; j < endpoints.length; j++) {
        router[endpoints[j].verb](
          endpoints[j].endpoint,
          api(endpoints[j].method)
        )
      }
    }
  }
}

module.exports[RESOLVER] = {
  name: 'apiRouter',
  lifetime: Lifetime.SCOPED
}
