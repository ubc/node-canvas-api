/* global test, expect */

const getAccounts = require('../src/getAccountIds')

test('getAccountIDs function exists', () => {
  expect(typeof getAccounts).toEqual('function')
})
