const { createContainer, Lifetime } = require('awilix')

module.exports = () => {
  const container = createContainer().loadModules(
    [
      ['../models/*.js', Lifetime.SINGLETON],
      ['../repositories/*.js', Lifetime.SCOPED],
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
