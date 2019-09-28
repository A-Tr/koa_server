const { Lifetime, RESOLVER } = require('awilix')
const loggerBuilder = require('../logger/logger')

module.exports = class HoliService {

  sayHoli(ctx) {
    this.logger = ctx.state.container.resolve('logger')
    this.logger.info(`This is the ctx: ${JSON.stringify(ctx)}`)
    ctx.body = 'OH boi'
    return
  }
}

module.exports[RESOLVER] = {
  name: 'holiService',
  lifetime: Lifetime.SCOPED
}
