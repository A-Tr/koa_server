const { Lifetime, RESOLVER } = require('awilix')

module.exports = class PersonController {
  build({ personService, logger }) {
    return {
      getPerson: async ctx => {
        const log = logger.getLog(ctx)
        const result = await personService.getOne(ctx.params.id, log)
        log.info(`Controller result: ${result}`)
      },

      getPeople: async ctx => {
        const log = logger.getLog(ctx)
        const result = await personService.getAll(log)
        log.info(`Controller result: ${result}`)
      },

      upsertPerson: async ctx => {
        const log = logger.getLog(ctx)
        await personService.create(ctx.body, log)
      }
    }
  }

  getEndpoints() {
    return [
      {
        verb: 'get',
        endpoint: '/people/:id',
        method: 'getPerson'
      },
      {
        verb: 'post',
        endpoint: '/people',
        method: 'upsertPerson'
      },
      {
        verb: 'get',
        endpoint: '/people',
        method: 'getPeople'
      }
    ]
  }
}

module.exports[RESOLVER] = {
  name: 'personController',
  lifetime: Lifetime.SCOPED
}
