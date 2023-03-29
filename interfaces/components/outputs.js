const React = require('react')
const { TerminalOutput } = require('react-terminal-ui')

const { _id } = require('../utils/uuid')

const defaultOutputs = [
  <TerminalOutput key={_id()}>Welcome to weal interface</TerminalOutput>,
  <TerminalOutput key={_id()}>-------------------------</TerminalOutput>,
  <TerminalOutput key={_id()}>The following example commands are provided:</TerminalOutput>,
  <TerminalOutput key={_id()}>'mode --light' will change to light theme.</TerminalOutput>,
  <TerminalOutput key={_id()}>'mode --dark' will change to dark theme.</TerminalOutput>,
  <TerminalOutput key={_id()}>'clear' will clear the terminal.</TerminalOutput>
]

module.exports = { defaultOutputs }
