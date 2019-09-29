const { Lifetime, RESOLVER } = require('awilix')

module.exports = class PersonService {
  constructor({ repository }) {
    this.repo = repository
  }

  getOne(id, logger) {
    logger.info(`This is the ctx: ${JSON.stringify(id)}`)

    const result = `Person number ${id}`
    return result
  }

  getAll(logger) {
    logger.info('Looking for everything')
    const result = 'ALL people dancing'
    return result
  }


  writeHoli(ctx) {
    this.logger.info(`This is the ctx: ${JSON.stringify(ctx)}`)

    const result = this.repo.write(ctx, this.logger)
    this.logger.info(`HANDLER LAYER: Result: ${result}`)
  }
}

module.exports[RESOLVER] = {
  name: 'personService',
  lifetime: Lifetime.SCOPED
}
