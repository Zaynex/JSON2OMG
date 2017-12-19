import round from 'lodash/round'

export const rgba2hexWithA = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== RGBA) {
    console.warn('Not rgbacolor but use rgba2hexWithA')
    return color
  }
  const result = color.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+(\.\d)?)[\s+]?/i)
  return (result && result.length >= 4)
    ? {
      hex: ('#' +
        ('0' + parseInt(result[1], 10).toString(16)).slice(-2) +
        ('0' + parseInt(result[2], 10).toString(16)).slice(-2) +
        ('0' + parseInt(result[3], 10).toString(16)).slice(-2)).toUpperCase(),
      o: +result[4]
    } : color
}

export const parseSketchColor2rgba = (rgbaFuncStr) => {
  if ((!rgbaFuncStr || rgbaFuncStr) && !rgbaFuncStr.includes(RGBA)) return rgbaFuncStr
  // eslint-disable-next-line no-unused-vars
  function rgba () {
    const { 0: _r, 1: _g, 2: _b, 3: _a } = arguments
    // 没办法处理 都是 rgba(1, 1, 1, x) 的情况，目前就是不进行乘法了
    if (_r <= 1 && _g <= 1 && _b <= 1) {
      return ({
        r: parseInt(round(_r * 255), 10),
        g: parseInt(round(_g * 255), 10),
        b: parseInt(round(_b * 255), 10),
        a: Number(Number(_a).toFixed(2))
      })
    }
    return {
      r: _r,
      g: _g,
      b: _b,
      a: _a
    }
  }
  const { r, g, b, a } = eval(rgbaFuncStr)
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export const checkColorUnit = (color) => {
  if (color.includes(RGBA)) return RGBA
  if (color.includes(RGB)) return RGB
  if (color.includes('#') && color.length === 9) return ARGB
  if (color.includes('#')) return HEX
  return false
}

export const getColorFromUnit = (color, transform = RGBA) => {
  if (!color) {
    return DEFAULT_COLOR
  }
  const currentColorUnit = checkColorUnit(color)
  if (!currentColorUnit) return DEFAULT_COLOR
  switch (currentColorUnit) {
    case RGBA:
      if (transform === currentColorUnit) return color
      if (transform === RGB) return rgba2rgb(color)
      if (transform === HEX) return rgba2hex(color)
      if (transform === ARGB) return rgba2argb(color)
      break
    case RGB:
      if (transform === currentColorUnit) return color
      if (transform === RGBA) return rgb2rgba(color)
      if (transform === HEX) return rgb2hex(color)
      if (transform === ARGB) return rgb2argb(color)
      break
    case HEX:
      if (transform === currentColorUnit) return color
      if (transform === RGBA) return hex2rgba(color)
      if (transform === RGB) return hex2rgb(color)
      if (transform === ARGB) return hex2argb(color)
      break
    case ARGB:
      if (transform === currentColorUnit) return color
      if (transform === RGBA) return argb2rgba(color)
      if (transform === RGB) return argb2rgbWithA(color)
      if (transform === HEX) return argb2hexWithA(color)
      break
    default:
      return color
  }
}

const rgba2rgbWithA = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== RGBA) {
    console.warn('Not rgbacolor but use rgba2rgbWithA')
    return color
  }
  const { hex, o } = rgba2hexWithA(color)
  const rgbColor = hex2rgb(hex)
  return ({
    rgb: rgbColor,
    o
  })
}

const hex2rgb = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== HEX) {
    console.warn('Not hexcolor but use hex2rgb')
    return color
  }
  color = color.replace('#', '')
  if (color.length === 3) {
    const [r, g, b] = color.split('')
    color = `${r}${r}${g}${g}${b}${b}`
  }
  const r = parseInt(color.substring(0, 2), 16)
  const g = parseInt(color.substring(2, 4), 16)
  const b = parseInt(color.substring(4, 6), 16)
  return `rgb(${r}, ${g}, ${b})`
}

const rgba2rgb = (color) => {
  const { rgb, o } = rgba2rgbWithA(color)
  if (o === 1) {
    return rgb
  }
  return `${rgb} ${o * 100}%`
}

const rgba2hex = (color) => {
  const { hex, o } = rgba2hexWithA(color)
  if (o === 1) {
    return hex
  }
  return `${hex.toUpperCase()} ${o * 100}%`
}

const rgba2argb = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== RGBA) {
    console.warn('Not rgbacolor but use rgba2argb')
    return color
  }
  const { hex, o } = rgba2hexWithA(color)
  const A = ('0' + parseInt(o * 255, 10).toString(16)).slice(-2).toUpperCase()
  return `#${A}${hex.slice(1)}`
}

const rgb2rgba = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== RGB) {
    console.warn('Not rgbcolor but use rgb2rgba')
    return color
  }
  return `rgba(${color.slice(4, -1)}, 1)`
}

const rgb2hex = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== RGB) {
    console.warn('Not rgbcolor but use rgb2hex')
    return color
  }
  const result = color.match(/^rgb?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)
  if (result && result.length === 4) {
    const r = ('0' + parseInt(result[1], 10).toString(16)).slice(-2)
    const g = ('0' + parseInt(result[2], 10).toString(16)).slice(-2)
    const b = ('0' + parseInt(result[3], 10).toString(16)).slice(-2)
    return (`#${r}${g}${b}`).toUpperCase()
  }
}

const rgb2argb = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== RGB) {
    console.warn('Not rgbcolor but use rgb2argb')
    return color
  }
  return hex2argb(rgb2hex(color))
}

const hex2argb = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== HEX) {
    console.warn('Not hexcolor but use hex2argb')
    return color
  }
  return `#FF${color.slice(1)}`
}

const hex2rgba = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== HEX) {
    console.warn('Not hexcolor but use hex2rgba')
    return color
  }
  return rgb2rgba(hex2rgb(color))
}

const argb2rgba = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== ARGB) {
    console.warn('Not argbcolor but use argb2rgba')
    return color
  }
  const result = []
  for (let i = 1; i < color.length; i += 2) {
    result.push(color.slice(i, i + 2))
  }
  let [a, r, g, b] = result
  r = parseInt(r, 16)
  g = parseInt(g, 16)
  b = parseInt(b, 16)
  a = Number((parseInt(a, 16) / 255).toString().slice(0, 4))
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

const argb2rgbWithA = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== ARGB) {
    console.warn('Not argbcolor but use argb2rgbWithA')
    return color
  }
  const rgbaColor = argb2rgba(color)
  const { rgb, o } = rgba2rgbWithA(rgbaColor)
  if (o == 1) {
    return rgb
  }
  return `${rgb} ${o * 100}%`
}

const argb2hexWithA = (color) => {
  const currentColorUnit = checkColorUnit(color)
  if (currentColorUnit !== ARGB) {
    console.warn('Not argbcolor but use argb2hexWithA')
    return color
  }
  const rgbaColor = argb2rgba(color)
  const { hex, o } = rgba2hexWithA(rgbaColor)
  if (o === 1) {
    return hex
  }
  return `${hex.toUpperCase()} ${o * 100}%`
}

const RGBA = 'rgba'
const ARGB = 'argb'
const RGB = 'rgb'
const HEX = 'hex'
const DEFAULT_COLOR = '#FFFFFF'
