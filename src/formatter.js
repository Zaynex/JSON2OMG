import { configProps, mergeLanguage } from './config'
import { camelize, handleLanguage } from './util'
export default ({ attr, language }) => {
  const attrWithCamelize = {}
  for (let key in attr) {
    const camelizeKey = camelize(key)
    attrWithCamelize[camelizeKey] = attr[key]
  }
  const trueLanguage = language
  const dealLanguage = handleLanguage(trueLanguage)
  language = mergeLanguage(language)
  const { width, height, lineHeight, opacity, borderRadius, borderWidth, borderColor, backgroundColor, color, fontSize, fontFamily, fontStyle } = attrWithCamelize
  const finallyWidth = width && { [configProps[language].width]: width }
  const finallyHeight = height && { [configProps[language].height]: height }
  const finallylineHeight = lineHeight && { [configProps[language].lineHeight]: lineHeight }
  const finallyOpacity = opacity && { [configProps[language].opacity]: opacity }
  const finallyBorderRadius = borderRadius && { [configProps[language].borderRadius]: borderRadius }
  const finallyBorderWidth = borderWidth && { [configProps[language].borderWidth]: borderWidth }
  const finallyBorderColor = borderColor && { [configProps[language].borderColor]: borderColor }
  const finallyBackgroundColor = backgroundColor && { [configProps[language].backgroundColor]: backgroundColor }
  const finallyColor = color && { [configProps[language].color]: color }
  const finallyFontSzie = fontSize && { [configProps[language].fontSize]: fontSize }
  const finallyFontFamily = fontFamily && { [configProps[language].fontFamily]: fontFamily }
  const finallyFontStyle = fontStyle && { [configProps[language].fontStyle]: fontStyle }
  const codeObject = Object.assign({},
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

  return dealLanguage(codeObject)
}
