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
    const { data } = await res.json()

    return data
  } catch (error) {
    console.error(error)

    return 'Commmand not found'
  }
}

module.exports = { fetchCmd }
