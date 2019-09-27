module.exports = class HoliController {
  constructor({ logger }) {
    this.logger = logger
  }

  sayHoli(ctx) {
    this.logger.info('joli')
    return
  }
}
