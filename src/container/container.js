const { createContainer, Lifetime } = require('awilix')

module.exports = () => {
  const container = createContainer().loadModules(
    [
      ['../services/HoliService.js', Lifetime.SCOPED] ,
      ['../router/router.js', Lifetime.SCOPED] ,
    ],
    {
      formatName: 'camelCase',
      cwd: __dirname
    }
  )
  return container
}
