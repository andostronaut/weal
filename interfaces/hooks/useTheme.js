const React = require('react')

const { getSessionStorage, setSessionStorage } = require('../utils/storage')

const { defaultTheme } = require('../utils/themes')

const { KEY_THEME } = require('../constants')

const useTheme = () => {
  const [theme, setTheme] = React.useState(null)

  const setThemeOnStateAndSession = (t) => {
    setSessionStorage(KEY_THEME, t)
  }

  React.useEffect(() => {
    if (getSessionStorage(KEY_THEME) !== undefined) {
      setTheme(getSessionStorage(KEY_THEME))
    } else {
      setTheme(defaultTheme)
    }
  }, [getSessionStorage(KEY_THEME)])

  return { theme, setThemeOnStateAndSession }
}

module.exports = useTheme
