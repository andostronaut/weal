const React = require('react')
const Terminal = require('react-terminal-ui')

const TerminalComponent = Terminal.default
const TerminalOutput = Terminal.TerminalOutput
const ColorMode = Terminal.ColorMode

const TerminalUI = () => {
  return (
    <TerminalComponent
      name='Terb'
      colorMode={ColorMode.Dark}
      onInput={(terminalInput) => console.log(`New terminal input received: '${terminalInput}'`)}
    >
      <TerminalOutput>Welcome to terb interface</TerminalOutput>
    </TerminalComponent>
  )
}

module.exports = TerminalUI
