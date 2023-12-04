/* global test, expect */
const { expect } = require('chai');

const hideCustomGradebookColumn = require('../src/hideCustomGradebookColumn.js')

describe('hideCustomGradebookColumn function exists', () => {
  it('typecheck', ()=> {
    expect(hideCustomGradebookColumn).to.be.a('function');
  });
});
