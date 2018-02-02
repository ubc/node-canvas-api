module.exports.buildOptions = options => {
  if (options) return options.join('&')
  else return ''
}
