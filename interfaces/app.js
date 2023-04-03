const React = require('react')
const { default: TerminalUI } = require('react-terminal-ui')

const Loader = require('./components/loader')

const { APP_NAME, TERMINAL_HEIGHT } = require('./constants')

const useHistory = require('./hooks/useHistory')
const useInput = require('./hooks/useInput')
const useTheme = require('./hooks/useTheme')
const usePrompt = require('./hooks/usePrompt')
const useHealth = require('./hooks/useHealth')

const App = () => {
  const { history, groupHistory } = useHistory()
  const { groupInput } = useInput()
  const { theme } = useTheme()
  const prompt = usePrompt()
  const isReady = useHealth()

  const handleInput = (input) => {
    groupInput(input)
    groupHistory(input)
  }

  if (!isReady) return <Loader />

  return (
    <TerminalUI
      name={APP_NAME}
      colorMode={theme}
      onInput={handleInput}
      height={TERMINAL_HEIGHT}
      prompt={prompt}
    >
      {history}
    </TerminalUI>
  )
}

module.exports = App
