const React = require('react')
const {
  default: TerminalUI,
  TerminalInput,
  TerminalOutput,
  ColorMode
} = require('react-terminal-ui')

const Terminal = () => {
  const [mode, setMode] = React.useState('light')
  const [history, setHistory] = React.useState([
    <TerminalOutput key='welcome'>Welcome to terb interface</TerminalOutput>,
    <TerminalOutput key='empty'>-------------------------</TerminalOutput>,
    <TerminalOutput key='commands'>The following example commands are provided:</TerminalOutput>,
    <TerminalOutput key='mode'>'mode' will change the terminal theme.</TerminalOutput>,
    <TerminalOutput key='clear'>'clear' will clear the terminal.</TerminalOutput>
  ])

  const themeByMode = {
    light: ColorMode.Light,
    dark: ColorMode.Dark
  }

  const handleInput = (terminalInput) => {
    let inputs = [...history]

    inputs.push(<TerminalInput>{terminalInput}</TerminalInput>)

    if (terminalInput.toLocaleLowerCase().trim() === 'mode=light') {
      setMode('light')
    } else if (terminalInput.toLocaleLowerCase().trim() === 'mode=dark') {
      setMode('dark')
    } else if (terminalInput.toLocaleLowerCase().trim() === 'clear') {
      inputs = []
    } else if (terminalInput) {
      inputs.push(<TerminalOutput key='unrecognized-command'>Unrecognized command</TerminalOutput>)
    }

    setHistory(inputs)
  }

  return (
    <TerminalUI name='Terb' colorMode={themeByMode[mode]} onInput={handleInput}>
      {history}
    </TerminalUI>
  )
}

module.exports = Terminal
