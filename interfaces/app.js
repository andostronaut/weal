const React = require('react')
const { default: TerminalUI } = require('react-terminal-ui')

const Input = require('./components/input')
const { _id } = require('./utils/uuid')

const { defaultTheme } = require('./utils/themes')
const { APP_NAME, TERMINAL_HEIGHT } = require('./constants')

const useHistory = require('./hooks/useHistory')

const App = () => {
  const [inputs, setInputs] = React.useState([])
  const { history, groupHistory } = useHistory()

  const grpInput = (input) => {
    const ipts = [...inputs]
    ipts.push(<Input key={_id()} value={input} />)
    setInputs(ipts)
  }

  const handleInput = (input) => {
    grpInput(input)
    groupHistory(input)
  }

  return (
    <TerminalUI
      name={APP_NAME}
      colorMode={defaultTheme}
      onInput={handleInput}
      height={TERMINAL_HEIGHT}
    >
      {history}
    </TerminalUI>
  )
}

module.exports = App
