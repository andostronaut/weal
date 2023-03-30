const React = require('react')
const { TerminalInput } = require('react-terminal-ui')

const { _id } = require('../utils/uuid')

const Input = ({ value }) => {
  return <TerminalInput key={_id()}>{value}</TerminalInput>
}

module.exports = Input
