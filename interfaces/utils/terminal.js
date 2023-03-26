const React = require('react')
// const Terminal = require('react-terminal-ui')

const TerminalUI = () => {
  return (
    <div className="container">
      {/* <Terminal
        name="Terb"
        colorMode={Terminal.ColorMode.Light}
        onInput={(terminalInput) => console.log(`New terminal input received: '${terminalInput}'`)}
      >
        <Terminal.TerminalOutput>Welcome to terb interface</Terminal.TerminalOutput>
      </Terminal> */}

      <h1>Hello from Terb</h1>
    </div>
  )
}

module.exports = TerminalUI
