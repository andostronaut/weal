const React = require('react')
const Terminal = require('react-terminal-ui')

const TerminalComponent = Terminal.default
const TerminalInput = Terminal.TerminalInput
const TerminalOutput = Terminal.TerminalOutput
const ColorMode = Terminal.ColorMode

const TerminalUI = () => {
  const [mode, setMode] = React.useState('light')
  const [history, setHistory] = React.useState([
    <TerminalOutput key='welcome'>Welcome to terb interface</TerminalOutput>,
    <TerminalOutput key='empty'></TerminalOutput>,
    <TerminalOutput key='commands'>The following example commands are provided:</TerminalOutput>,
    <TerminalOutput key='mode'>'mode' will change the terminal theme.</TerminalOutput>,
    <TerminalOutput key='clear'>'clear' will clear the terminal.</TerminalOutput>
  ])

  const themeByMode = {
    light: ColorMode.Light,
    dark: ColorMode.Dark
  }

  const handleInput = (terminalInput) => {
    let inputs = [...lineData]
    inputs.push(<TerminalInput>{terminalInput}</TerminalInput>)

    if (terminalInput.toLocaleLowerCase().trim() === 'mode=light') {
      setMode('light')
    } else if (terminalInput.toLocaleLowerCase().trim() === 'mode=dark') {
      setMode('dark')
    } else if (terminalInput.toLocaleLowerCase().trim() === 'clear') {
      ld = []
    } else if (terminalInput) {
      ld.push(<TerminalOutput>Unrecognized command</TerminalOutput>)
    }

    setHistory(inputs)
  }

  return (
    <TerminalComponent name='Terb' colorMode={themeByMode[mode]} onInput={handleInput}>
      {history}
    </TerminalComponent>
  )
}

module.exports = TerminalUI
