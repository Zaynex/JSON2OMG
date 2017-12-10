import { configProps } from './config'
export default ({ attr, unit }) => {
  const { width, height, lineHeight, opacity, borderRadius, borderWidth, borderColor, backgroundColor, color, fontSize, fontFamily, fontStyle } = attr
  const finallyWidth = width && { [configProps[unit].width]: width }
  const finallyHeight = height && { [configProps[unit].height]: height }
  const finallylineHeight = lineHeight && { [configProps[unit].lineHeight]: lineHeight }
  const finallyOpacity = opacity && { [configProps[unit].opacity]: opacity }
  const finallyBorderRadius = borderRadius && { [configProps[unit].borderRadius]: borderRadius }
  const finallyBorderWidth = borderWidth && { [configProps[unit].borderWidth]: borderWidth }
  const finallyBorderColor = borderColor && { [configProps[unit].borderColor]: borderColor }
  const finallyBackgroundColor = backgroundColor && { [configProps[unit].backgroundColor]: backgroundColor }
  const finallyColor = color && { [configProps[unit].color]: color }
  const finallyFontSzie = fontSize && { [configProps[unit].fontSize]: fontSize }
  const finallyFontFamily = fontFamily && { [configProps[unit].fontFamily]: fontFamily }
  const finallyFontStyle = fontStyle && { [configProps[unit].fontStyle]: fontStyle }
  return Object.assign({},
    finallyWidth,
    finallyHeight,
    finallylineHeight,
    finallyOpacity,
    finallyBorderRadius,
    finallyBorderWidth,
    finallyBorderColor,
    finallyBackgroundColor,
    finallyColor,
    finallyFontSzie,
    finallyFontStyle,
    finallyFontFamily)
}
