const cssbeautify = require('./beautify')
const JSON2OMG = (data, flatform) => {
  const transfromCode = executeCommandPlatForm(flatform)
  return transfromCode(data)
}

const transform2css = (data) => {
  const { width, height, backgroudColor, color, border } = data
}

const executeCommandPlatForm = {
  css: transform2css
}
const test = cssbeautify(`menu{opacity:.7; height:100px}`, {
  indent: '  ',
  openbrace: 'separate-line',
  autosemicolon: true
})
console.log(test)
