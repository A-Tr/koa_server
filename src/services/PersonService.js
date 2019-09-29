const { Lifetime, RESOLVER } = require('awilix')

module.exports = class PersonService {
  constructor({ repository }) {
    this.repo = repository
  }

  getOne(id, log) {
    log.info(`This is the ctx: ${JSON.stringify(id)}`)

    const result = `Person number ${id}`
    return result
  }

  getAll(log) {
    log.info('Looking for everything')
    const result = 'ALL people dancing'
    return result
  }


  writeHoli(ctx) {
    this.log.info(`This is the ctx: ${JSON.stringify(ctx)}`)

    const result = this.repo.write(ctx, this.log)
    this.log.info(`HANDLER LAYER: Result: ${result}`)
  }
}

module.exports[RESOLVER] = {
  name: 'personService',
  lifetime: Lifetime.SCOPED
}
