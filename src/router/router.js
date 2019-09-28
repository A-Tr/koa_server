const { makeInvoker } = require('awilix-koa')


function createApi({ holiService }) {
  return {
    sayHoli: ctx => {
      return holiService.sayHoli(ctx)
    }
  }
}

module.exports = function(router) {
  const api = makeInvoker(createApi)
  router.get('/holi', api('sayHoli'))
}