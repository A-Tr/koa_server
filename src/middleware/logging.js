const { asValue } = require('awilix')
const uuidv4 = require('uuid/v4')


module.exports = (ctx, next) => {
  const logger = ctx.state.container.resolve('logger')
  const log = logger.create(uuidv4(), ctx.ip)

  log.debug('Adding logging MW for request')
  ctx.state.container.register({
    log: asValue(log)
  })
  return next()
}
