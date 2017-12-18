import { CSS, LESS, SASS, SCSS, STYLUS } from './config'
export const camelize = (str) => {
  // match single char
  return str.replace(/-(.)?/g, function (match, chr) { return chr ? chr.toUpperCase() : '' })
}

const handleCss = (obj) =>
  Object.entries(obj).map(([key, value]) => `${key}: ${value};`)

const handleStylus = (obj) =>
  Object.entries(obj).map(([key, value]) => `${key} ${value}`)

const handleSass = (obj) =>
  Object.entries(obj).map(([key, value]) => `${key}: ${value}`)

export const handleLanguage = (language) => {
  switch (language) {
    case CSS:
    case LESS:
    case SCSS:
      return handleCss
    case STYLUS:
      return handleStylus
    case SASS:
      return handleSass
    default:
      return handleCss
  }
}
