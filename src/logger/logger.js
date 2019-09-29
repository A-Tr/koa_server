const { addColors, createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format
const { Lifetime, RESOLVER } = require('awilix')

module.exports = class Logger {

  create(traceId, ip) {
    const myFormat = printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message} trace-id: ${traceId} req-ip:${ip}`
    })

    return createLogger({
      level: 'debug',
      format: format.combine(format.colorize(), timestamp(), myFormat),
      transports: [new transports.Console()]
    })
  } 

  getLog(ctx) {
    return ctx.state.container.resolve('log')
  }
}


module.exports[RESOLVER] = {
  name: 'logger',
  lifetime: Lifetime.SCOPED
}