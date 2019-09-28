const { createContainer, Lifetime } = require('awilix')

module.exports = () => {
  const container = createContainer().loadModules(
    [
      ['../repositories/repository.js', Lifetime.SCOPED],
      ['../services/HoliService.js', Lifetime.SCOPED] ,
      ['../router/router.js', Lifetime.SCOPED]
    ],
    {
      formatName: 'camelCase',
      cwd: __dirname
    }
  )
  return container
}
