const { Lifetime, RESOLVER } = require('awilix')

module.exports = class PersonController {
  build({ personService }) {
    return {
      getPerson: async ctx => {
        const logger = ctx.state.container.resolve('logger')
        const result = await personService.getOne(ctx.params.id, logger)
        logger.info(`Controller result: ${result}`)
      },

      getPeople: async ctx => {
        const logger = ctx.state.container.resolve('logger')
        const result = await personService.getAll(logger)
        logger.info(`Controller result: ${result}`)
      },

      upsertPerson: async ctx => {
        const logger = ctx.state.container.resolve('logger')
        await personService.create(ctx.body, logger)
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
