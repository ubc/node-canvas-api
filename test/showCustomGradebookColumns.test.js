/* global test, expect */
const { expect } = require('chai');

const showCustomGradebookColumn = require('../src/showCustomGradebookColumn.js')

describe('showCustomGradebookColumn function exists', () => {
  it('typecheck', ()=> {
    expect(showCustomGradebookColumn).to.be.a('function');
  });
});
