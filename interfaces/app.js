const React = require('react')
const { default: TerminalUI, TerminalInput, TerminalOutput } = require('react-terminal-ui')
const { v4: uuidv4 } = require('uuid')

const { defaultOutputs } = require('./components/outputs')

const { defaultTheme, switchTheme } = require('./utils/themes')
const { APP_NAME, KEY_MODE, KEY_CLEAR } = require('./constants')

const App = () => {
  const [theme, setTheme] = React.useState(null)
  const [history, setHistory] = React.useState(defaultOutputs)

  const handleInput = (terminalInput) => {
    let inputs = [...history]

    inputs.push(<TerminalInput key={uuidv4()}>{terminalInput}</TerminalInput>)

    if (terminalInput.toLocaleLowerCase().trim().slice(0, 4) === KEY_MODE) {
      setTheme(switchTheme(terminalInput))
    } else if (terminalInput.toLocaleLowerCase().trim() === KEY_CLEAR) {
      inputs = []
    } else if (terminalInput) {
      inputs.push(<TerminalOutput key={uuidv4()}>Unrecognized command</TerminalOutput>)
    } else if (e) setHistory(inputs)
  }

  return (
    <TerminalUI name={APP_NAME} colorMode={theme ?? defaultTheme} onInput={handleInput}>
      {history}
    </TerminalUI>
  )
}

module.exports = App
