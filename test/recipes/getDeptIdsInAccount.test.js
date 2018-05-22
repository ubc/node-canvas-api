/* global test, expect */

const getDeptIDsInAccount = require('../../src/recipes/getDeptIDsInAccount')

test('getDeptIDsInAccount function exists', () => {
  expect(typeof getDeptIDsInAccount).toEqual('function')
})
