class API {
  constructor(opts) {
    // Save a reference to our dependency.
  }
 
  // imagine ctx is our HTTP request context...
  sayHoli(ctx) {
    return this.holiHandler.sayHoli(ctx)
  }
}
module.exports = API// Maps `GET /todos/:id` to the `getTodo` function on the returned object from `API`    this.holiHandler = opts.holiHandler
