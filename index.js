const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const get = require('./src/requests/get')
const put = require('./src/requests/put')
const options = require('./src/options')

recipes.getAllCoursesWithNoSyllabus(15, 2017, 'W2')
  .then(x => console.log(x))
