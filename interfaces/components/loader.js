const React = require('react')

const { ProgressBar } = require('react-loader-spinner')

const useTheme = require('../hooks/useTheme')

const { LIGHT_THEME_KEY } = require('../constants')

const Loader = ({ msg }) => {
  const { theme } = useTheme()
  const isLightTheme = theme === LIGHT_THEME_KEY

  const loader = (
    <div className={`loader-container ${isLightTheme ? 'light' : 'dark'}`}>
      <ProgressBar
        height='80'
        width='80'
        ariaLabel='progress-bar-loading'
        wrapperStyle={{}}
        wrapperClass='progress-bar-wrapper'
        borderColor={isLightTheme ? '#000' : '#FFF'}
        barColor={isLightTheme ? '#000' : '#FFF'}
      />
      <span className={`loader-container-msg ${isLightTheme ? 'light' : 'dark'}`}>{msg}</span>
    </div>
  )

  return loader
}

module.exports = Loader
