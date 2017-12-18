export const configProps = {
  'css': {
    width: 'width',
    height: 'height',
    lineHeight: 'line-height',
    opacity: 'opacity',
    border: 'border',
    borderRadius: 'border-radius',
    borderColor: 'border-color',
    borderWidth: 'border-width',
    backgroundColor: 'background-color',
    color: 'color',
    fontSize: 'font-size',
    fontFamily: 'font-family',
    fontStyle: 'font-style',
    shadows: 'box-shadow',
    innerShadows: 'inner-shadow'
  },
  'android': {
    width: 'layout_width',
    height: 'layout_height',
    border: 'border',
    opacity: 'opacity',
    color: 'textColor',
    fontSize: 'textSize',
    fontFamily: 'font-family',
    fontStyle: 'font-style',
    backgroundColor: 'background',
    borderRadius: 'radius',
    borderColor: 'border-color',
    borderWidth: 'border-width',
    shadows: 'box-shadow',
    innerShadows: 'inner-shadow'
  },
  'swift': {
    width: 'width',
    height: 'height',
    opacity: 'opacity',
    border: 'border',
    backgroundColor: 'background-color',
    color: 'text-color',
    fontSize: 'font-size',
    fontFamily: 'font-family',
    fontStyle: 'font-style',
    borderRadius: 'border-radius',
    borderColor: 'border-color',
    borderWidth: 'border-width',
    shadows: 'box-shadow',
    innerShadows: 'inner-shadow'
  }
}

export const mergeLanguage = (unit) => {
  unit = unit.toLowerCase()
  switch (unit) {
    case CSS:
    case EM:
    case REM:
    case STYLUS:
    case LESS:
    case SASS:
    case SCSS:
      return CSS
    case ANDROID:
      return ANDROID
    case SWIFT:
      return SWIFT
    case OC:
      return OC
    default:
      return CSS
  }
}

const CSS = 'css'
const EM = 'em'
const REM = 'rem'
const STYLUS = 'stylus'
const LESS = 'less'
const SASS = 'sass'
const SCSS = 'scss'
const ANDROID = 'android'
const SWIFT = 'swift'
const OC = 'objective-c'
