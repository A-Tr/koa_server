const loggerBuilder = require('../logger/logger')
const { asValue } = require('awilix')
const uuidv4 = require('uuid/v4')

module.exports = (ctx, next) => {
  const logger = loggerBuilder(uuidv4(), ctx.ip)
  logger.debug(`Adding logging MW for request: ${ctx.ip}`)
  ctx.state.container.register({
    logger: asValue(logger) 
  })
  return next()
}
