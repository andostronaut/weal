const { ColorMode } = require('react-terminal-ui')

const { CMD_MODE_LIGHT, CMD_MODE_DARK, LIGHT_THEME, DARK_THEME } = require('../constants')

const themeByMode = Object.freeze({
  light: ColorMode.Light,
  dark: ColorMode.Dark
})

const defaultTheme = themeByMode[LIGHT_THEME]

const switchTheme = (val) => {
  let theme = LIGHT_THEME

  if (val.toLocaleLowerCase().trim() === CMD_MODE_LIGHT) {
    theme = LIGHT_THEME
  } else if (val.toLocaleLowerCase().trim() === CMD_MODE_DARK) {
    theme = DARK_THEME
  }

  return themeByMode[theme]
}

module.exports = { defaultTheme, switchTheme }
