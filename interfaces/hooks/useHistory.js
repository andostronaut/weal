const React = require('react')

const DefaultOutputs = require('../components/outputs')
const Input = require('../components/input')
const Output = require('../components/output')

const { switchTheme } = require('../utils/themes')

const { fetchCmd } = require('../utils/fetch')

const { _id } = require('../utils/uuid')

const { KEY_MODE, KEY_CLEAR } = require('../constants')

const useTheme = require('./useTheme')

const useHistory = () => {
  const [history, setHistory] = React.useState([])
  const { setThemeOnStateAndSession } = useTheme()

  const groupHistory = async (input) => {
    let lines = [...history]

    lines.push(<Input key={_id()} value={input} />)

    if (input.toLocaleLowerCase().trim().slice(0, 4) === KEY_MODE) {
      const theme = switchTheme(input)
      setThemeOnStateAndSession(theme)
    }
    if (input.toLocaleLowerCase().trim() === KEY_CLEAR) {
      lines = []
    } else if (input) {
      const res = await fetchCmd(input)
      lines.push(<Output key={_id()} value={res} />)
    }

    setHistory(lines)
  }

  const pushDefaultOutputs = () => {
    const histo = [...history]
    if (Array.isArray(history) && history.length === 0) {
      histo.push(<DefaultOutputs key={_id()} />)
      setHistory(histo)
    }
  }

  React.useEffect(() => {
    pushDefaultOutputs()
  }, [])

  return { history, groupHistory }
}

module.exports = useHistory
