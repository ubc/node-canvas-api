import uglify from 'rollup-plugin-uglify'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import json from 'rollup-plugin-json'

const config =  {
  input: 'index.js',
  output: {
    file: 'dist/node-canvas-api.js',
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
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
        warnings: false
      }
    })
  )
}

export default config
