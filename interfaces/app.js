const React = require('react')
const { default: TerminalUI } = require('react-terminal-ui')

const DefaultOutputs = require('./components/outputs')
const Input = require('./components/input')
const Output = require('./components/output')

const { defaultTheme, switchTheme } = require('./utils/themes')
const { APP_NAME, KEY_MODE, KEY_CLEAR, TERMINAL_HEIGHT, KEY_THEME } = require('./constants')

const { fetchCmd } = require('./utils/fetch')

const { getSessionStorage, setSessionStorage } = require('./utils/storage')

const { _id } = require('./utils/uuid')

const App = () => {
  const [theme, setTheme] = React.useState(getSessionStorage(KEY_THEME))
  const [inputs, setInputs] = React.useState([])
  const [history, setHistory] = React.useState([])

  const grpInput = (input) => {
    const ipts = [...inputs]
    ipts.push(<Input key={_id()} value={input} />)
    setInputs(ipts)
  }

  const grpHistory = async (input) => {
    let lns = [...history]

    lns.push(<Input key={_id()} value={input} />)

    if (input.toLocaleLowerCase().trim().slice(0, 4) === KEY_MODE) {
      const th = switchTheme(input)
      setTheme(th)
      setSessionStorage(KEY_THEME, th)
    }
    if (input.toLocaleLowerCase().trim() === KEY_CLEAR) {
      lns = []
    } else if (input) {
      const cmdRes = await fetchCmd(input)
      lns.push(<Output key={_id()} value={cmdRes} />)
    }

    setHistory(lns)
  }

  const handleInput = (input) => {
    grpInput(input)
    grpHistory(input)
  }

  React.useEffect(() => {
    const hs = [...history]
    if (Array.isArray(history) && history.length === 0) {
      hs.push(<DefaultOutputs key={_id()} />)
      setHistory(hs)
    }
  }, [history])

  return (
    <TerminalUI
      name={APP_NAME}
      colorMode={theme ?? defaultTheme}
      onInput={handleInput}
      height={TERMINAL_HEIGHT}
    >
      {history}
    </TerminalUI>
  )
}

module.exports = App
