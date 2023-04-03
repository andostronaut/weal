const { BASIC_CMDS, CMD_MODE_LIGHT, CMD_MODE_DARK } = require('../constants')

const { ENV } = require('./env')

const fetchCmd = async (input) => {
  if (BASIC_CMDS.includes(input)) {
    if (input === CMD_MODE_LIGHT) {
      return 'Light mode activated'
    } else if (input === CMD_MODE_DARK) {
      return 'Dark mode activated'
    }
  }

  try {
    const res = await fetch(`${ENV.BACKEND_URI}/process/${input}`)
    const cmdRes = await res.text()

    return cmdRes
  } catch (error) {
    console.error(error)

    return 'Commmand not found'
  }
}

const fecthHealth = async () => {
  try {
    const res = await fetch(`${ENV.BACKEND_URI}/health`)
    const { status } = await res.json()

    return status
  } catch (error) {
    return false
  }
}

module.exports = { fetchCmd, fecthHealth }
