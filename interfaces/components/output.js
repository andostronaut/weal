const React = require('react')
const { TerminalOutput } = require('react-terminal-ui')

const { _id } = require('../utils/uuid')

const Output = ({ value }) => {
  const output = <TerminalOutput key={_id()}>{value}</TerminalOutput>

  return output
}

module.exports = Output
