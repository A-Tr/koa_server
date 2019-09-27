module.exports = class HoliService {
  constructor({logger}) {
    this.logger = logger.newLogger()
  }

  sayHoli(ctx) {
    this.logger.info('joli')
    ctx.body = ('OH boi')
    return
  }
}
