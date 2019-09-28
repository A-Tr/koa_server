const { Lifetime, RESOLVER } = require('awilix')


module.exports = class Repository {
  constructor() {}
  write(ctx, logger)  {
    logger.info(`REPO LEVEL: CTX Body ${ctx}`)

    return 'EVERYTHING OK'
  }
}

module.exports[RESOLVER] = {
  name: 'repository',
  lifetime: Lifetime.SCOPED
}
