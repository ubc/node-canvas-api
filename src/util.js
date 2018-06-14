export function buildOptions (options) {
  if (options) return options.join('&')
  else return ''
}
