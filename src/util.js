export const camelize = (str) => {
  // match single char
  return str.replace(/-(.)?/g, function (match, chr) { return chr ? chr.toUpperCase() : '' })
}
