const React = require('react')
const { TerminalOutput } = require('react-terminal-ui')
const { v4: uuidv4 } = require('uuid')

const defaultOutputs = [
  <TerminalOutput key={uuidv4()}>Welcome to weal interface</TerminalOutput>,
  <TerminalOutput key={uuidv4()}>-------------------------</TerminalOutput>,
  <TerminalOutput key={uuidv4()}>The following example commands are provided:</TerminalOutput>,
  <TerminalOutput key={uuidv4()}>'mode --light' will change to light theme.</TerminalOutput>,
  <TerminalOutput key={uuidv4()}>'mode --dark' will change to dark theme.</TerminalOutput>,
  <TerminalOutput key={uuidv4()}>'clear' will clear the terminal.</TerminalOutput>
]

module.exports = { defaultOutputs }
