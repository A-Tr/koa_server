const { Lifetime, RESOLVER } = require('awilix')

module.exports = class PersonService {
  constructor({ personRepository }) {
    this.repo = personRepository
  }

  async getOne(id, log) {
    log.info(`CONTROLLER: Looking for ID: ${JSON.stringify(id)}`)

    try {
      const result = await this.repo.findOne({ id }, log)
      log.info(`Result found: ${result}`)
      return result
    } catch (error) {
      log.error(error)
    }
  }

  async getAll(log) {
    log.info('Looking for everything')

    try {
      const result = await this.repo.findAll(log)
      log.info(`Result found: ${result}`)

      return result
    } catch (error) {
      log.error(error)
    }
  }

  upsert(ctx, log) {
    log.info(`This is the ctx: ${JSON.stringify(ctx)}`)

    const result = this.repo.upsert(ctx, this.log)
    log.info(`HANDLER LAYER: Result: ${result}`)
  }
}

module.exports[RESOLVER] = {
  name: 'personService',
  lifetime: Lifetime.SCOPED
}
