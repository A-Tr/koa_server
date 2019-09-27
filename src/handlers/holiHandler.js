class HoliHandler {
  constructor({ logger }) {
    // We depend on the current user!
    this.logger = logger
  }

  sayHoli(ctx) {
    // use your imagination ;)
    this.logger.info('Holi')
    this.logger.info('Ctx: ', ctx)
  }
}

module.exports = HoliHandler
