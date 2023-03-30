const React = require('react')
const { TerminalOutput } = require('react-terminal-ui')

const { _id } = require('../utils/uuid')

const Output = ({ value }) => {
  return <TerminalOutput key={_id()}>{value}</TerminalOutput>
}

module.exports = Output
