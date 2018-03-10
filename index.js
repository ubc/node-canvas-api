const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')
const options = require('./src/options')

recipes.getAllCoursesInAccount(15).then(x => console.log(x))
