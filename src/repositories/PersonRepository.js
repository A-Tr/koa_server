const { Lifetime, RESOLVER } = require('awilix')

module.exports = class PersonRepository {
  constructor({ personModel }) {
    this.model = personModel
  }

  async findOne(id, log) {
    log.info(`PERSON REPOSITORY: Looking in mongo for Person with Id ${id}`)
    const result = await this.model.findOne(id).exec()
    log.info(`PERSON REPOSITORY: Person found ${result}`)

    return result
  }

  async findAll(log) {
    log.info('PERSON REPOSITORY: Looking in mongo for All People')
    const result = await this.model.find()
    log.info(`PERSON REPOSITORY: Result ${result}`)

    return result
  }

  upsert(document, logger) {
    logger.info(`REPO LEVEL: Document for insertion ${document}`)

    return this.model.create(document)

  }
}

module.exports[RESOLVER] = {
  name: 'personRepository',
  lifetime: Lifetime.SCOPED
}
