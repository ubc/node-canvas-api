/* global describe, it */
const assert = require('assert')
const buildOptions = require('../src/util')

describe('buildOptions', () => {
  it('returns an empty string if the array passed to it is empty', () => {
    assert.deepEqual(buildOptions([]), '')
  })
  it('returns the options separated by &', () => {
    const input = ['enrollment_type[]=teacher', 'include[]=locked', 'include[]=custom_links']
    const output = 'enrollment_type[]=teacher&include[]=locked&include[]=custom_links'
    assert.deepEqual(buildOptions(input), output)
  })
})
