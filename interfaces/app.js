const React = require('react')
const { default: TerminalUI, TerminalInput, TerminalOutput } = require('react-terminal-ui')
const { v4: uuidv4 } = require('uuid')

const { defaultOutputs } = require('./components/outputs')

const { defaultTheme, switchTheme } = require('./utils/themes')
const { APP_NAME, KEY_MODE, KEY_CLEAR, TERMINAL_HEIGHT } = require('./constants')

const { fetchCmd } = require('./utils/fetch')

const App = () => {
  const [theme, setTheme] = React.useState(null)
  const [inputs, setInputs] = React.useState([])
  const [history, setHistory] = React.useState(defaultOutputs)

  const grpInput = (input) => {
    const ipts = [...inputs]

    ipts.push(<TerminalInput key={uuidv4()}>{input}</TerminalInput>)

    setInputs(ipts)
  }

  const grpHistory = async (input) => {
    let lns = [...history]

    lns.push(<TerminalInput key={uuidv4()}>{input}</TerminalInput>)

    if (input.toLocaleLowerCase().trim().slice(0, 4) === KEY_MODE) {
      setTheme(switchTheme(input))
    } else if (input.toLocaleLowerCase().trim() === KEY_CLEAR) {
      lns = []
    } else if (input) {
      const cmdRes = await fetchCmd(input)
      lns.push(<TerminalOutput key={uuidv4()}>{cmdRes}</TerminalOutput>)
    }

    setHistory(lns)
  }

  const handleInput = async (input) => {
    grpInput(input)
    grpHistory(input)
  }

  return (
    <TerminalUI
      name={APP_NAME}
      colorMode={theme ?? defaultTheme}
      onInput={handleInput}
      height={TERMINAL_HEIGHT}
    >
      {history}
    </TerminalUI>
  )
}

module.exports = App
