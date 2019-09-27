const winston = require('winston')

module.exports = () => {
  return {
    createLogger: winston.createLogger({
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: 'combined.log' })
      ]
    })
  }
}
