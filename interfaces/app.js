const React = require('react')
const { default: TerminalUI } = require('react-terminal-ui')

const { APP_NAME, TERMINAL_HEIGHT } = require('./constants')

const useHistory = require('./hooks/useHistory')
const useInput = require('./hooks/useInput')
const useTheme = require('./hooks/useTheme')
const usePrompt = require('./hooks/usePrompt')

const App = () => {
  const { history, groupHistory } = useHistory()
  const { groupInput } = useInput()
  const { theme } = useTheme()
  const prompt = usePrompt()

  const handleInput = (input) => {
    groupInput(input)
    groupHistory(input)
  }

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
