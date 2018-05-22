/* global test, expect */

const getAccounts = require('../../src/recipes/getAccountIds')

test('getAccountIDs function exists', () => {
  expect(typeof getAccounts).toEqual('function')
})
