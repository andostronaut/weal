const React = require('react')
const { TerminalOutput } = require('react-terminal-ui')

const { _id } = require('../utils/uuid')

const { DEFAULT_OUTPUTS_LIST } = require('../constants')

const DefaultOutputs = () => {
  const outputs = DEFAULT_OUTPUTS_LIST.map((list) => (
    <TerminalOutput key={_id()}>{list}</TerminalOutput>
  ))

  return outputs
}

module.exports = DefaultOutputs
