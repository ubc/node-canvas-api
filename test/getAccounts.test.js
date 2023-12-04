/* global test, expect */
const { expect } = require('chai');

const getAccounts = require('../src/getAccountIds')

describe('getAccountIDs function exists', () => {
  it('typecheck', () => {
    expect(getAccounts).to.be.a('function');
  });
});
