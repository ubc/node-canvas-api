const { terser } = require('rollup-plugin-terser')
const resolve = require('rollup-plugin-node-resolve')
const commonjs = require('rollup-plugin-commonjs')
const json = require('rollup-plugin-json')

const config = {
  input: './source/index.js',
  output: {
    format: 'umd',
    name: 'node-canvas-api'
  },
  plugins: [
    resolve(),
    commonjs({
      include: 'node_modules/**'
    }),
    json()
  ]
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    terser({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

module.exports = config
