const { createContainer, Lifetime } = require('awilix')

module.exports = () => {
  const container = createContainer().loadModules(
    [
      ['../repositories/repository.js', Lifetime.SCOPED],
      ['../services/*.js', Lifetime.SCOPED] ,
      ['../logger/*.js', Lifetime.SCOPED] ,
      ['../routes/*.js', Lifetime.SCOPED]
    ],
    {
      formatName: 'camelCase',
      cwd: __dirname
    }
  )
  return container
}
