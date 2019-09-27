const { createLogger, format, transports } = require('winston')
const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.colorize(),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [new transports.Console()]
})

module.exports = logger
