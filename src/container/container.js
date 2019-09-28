const { createContainer, Lifetime } = require('awilix')

module.exports = () => {
  const container = createContainer().loadModules(
    [
      ['../services/HoliService.js', Lifetime.SCOPED] ,
    ],
    {
      formatName: 'camelCase',
      cwd: __dirname
    }
  )
  return container
}
