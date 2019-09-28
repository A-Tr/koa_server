const { addColors, createLogger, format, transports } = require('winston')
const { combine, timestamp, label, printf } = format
module.exports = (traceId, ip) => {
  const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} ${level}: ${message} trace-id: ${traceId} req-ip:${ip}`
  })
  const myCustomLevels = {
    colors: {
      debug: 'blue',
      info: 'bold green',
      warn: 'yellow',
      error: 'bold red'
    }
  }


  addColors(myCustomLevels.colors)

  return createLogger({
    level: 'info',
    format: format.combine(format.colorize(), timestamp(), myFormat),
    transports: [new transports.Console()]
  })
}
