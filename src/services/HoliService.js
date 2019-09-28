const { Lifetime, RESOLVER } = require('awilix')

module.exports = class HoliService {
  constructor({ repository }) {
    this.repo = repository
  }

  sayHoli(ctx) {
    this.logger = ctx.state.container.resolve('logger')
    this.logger.info(`This is the ctx: ${JSON.stringify(ctx)}`)
    ctx.body = 'OH boi'
    return
  }

  writeHoli(ctx) {
    this.logger = ctx.state.container.resolve('logger')
    this.logger.info(`This is the ctx: ${JSON.stringify(ctx)}`)

    const result = this.repo.write(ctx, this.logger)
    this.logger.info(`HANDLER LAYER: Result: ${result}`)
  }
}

module.exports[RESOLVER] = {
  name: 'holiService',
  lifetime: Lifetime.SCOPED
}
