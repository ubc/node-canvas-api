/* global test, expect */
const { expect } = require('chai');

const getDeptIDsInAccount = require('../src/getDeptIDsInAccount')

describe('getDeptIDsInAccount function exists', () => {
  it('typecheck', ()=> {
    expect(getDeptIDsInAccount).to.be.a('function');
  });
});
