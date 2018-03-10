const recipes = require('./src/recipes/index')
const requests = require('./src/requests/index')

recipes.getAccountIds()
  .then(x => console.log(x))
