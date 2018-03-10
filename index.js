const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const options = require('./src/options')

requests.get.getCourses(182, options.getOptions.courses.include.term).then(x => console.log(x))
