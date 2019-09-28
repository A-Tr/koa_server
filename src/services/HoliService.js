module.exports = class HoliService {
  constructor({logger}) {
    this.logger = logger
  }

  sayHoli(ctx) {
    this.logger.info(`This is the ctx: ${JSON.stringify(ctx)}`)
    ctx.body = ('OH boi')
    return
  }
}
