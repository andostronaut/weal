const React = require('react')
const { default: TerminalUI, TerminalInput, TerminalOutput } = require('react-terminal-ui')
const { v4: uuidv4 } = require('uuid')

const { defaultOutputs } = require('./components/outputs')

const { defaultTheme, switchTheme } = require('./utils/themes')
const { APP_NAME, KEY_MODE, KEY_CLEAR } = require('./constants')

const App = () => {
  const [theme, setTheme] = React.useState(null)
  const [inputs, setInputs] = React.useState([])
  const [history, setHistory] = React.useState(defaultOutputs)

  const grpInput = (input) => {
    const ipts = [...inputs]

    ipts.push(<TerminalInput key={uuidv4()}>{input}</TerminalInput>)

    setInputs(ipts)
  }

  const grpHistory = (input) => {
    let lns = [...history]

    lns.push(<TerminalInput key={uuidv4()}>{input}</TerminalInput>)

    if (input.toLocaleLowerCase().trim().slice(0, 4) === KEY_MODE) {
      setTheme(switchTheme(input))
    } else if (input.toLocaleLowerCase().trim() === KEY_CLEAR) {
      lns = []
    } else if (input) {
      lns.push(<TerminalOutput key={uuidv4()}>Unrecognized command</TerminalOutput>)
    }

    setHistory(lns)
  }

  const handleInput = (input) => {
    grpInput(input)
    grpHistory(input)
  }

  return (
    <TerminalUI name={APP_NAME} colorMode={theme ?? defaultTheme} onInput={handleInput}>
      {history}
    </TerminalUI>
  )
}

module.exports = App
