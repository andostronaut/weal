const React = require('react')
const Terminal = require('react-terminal-ui')

const TerminalUI = () => {
  return (
    <Terminal.default
      name='Terb'
      colorMode={Terminal.ColorMode.Dark}
      onInput={(terminalInput) => console.log(`New terminal input received: '${terminalInput}'`)}
    >
      <Terminal.TerminalOutput>Welcome to terb interface</Terminal.TerminalOutput>
    </Terminal.default>
  )
}

module.exports = TerminalUI
