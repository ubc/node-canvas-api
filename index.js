const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const get = require('./src/requests/get')
const put = require('./src/requests/put')
const options = require('./src/options')

get.getSyllabusOfCourse(270)
  .then(x => console.log(x))
