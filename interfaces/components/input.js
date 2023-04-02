const React = require('react')
const { TerminalInput } = require('react-terminal-ui')

const { _id } = require('../utils/uuid')

const Input = ({ value }) => {
  const input = <TerminalInput key={_id()}>{value}</TerminalInput>

  return input
}

module.exports = Input
