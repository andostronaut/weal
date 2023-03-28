const { exec } = require('child_process')
const ora = require('ora')

const log = require('./utils/log')

const { CMD_RUN_BACKEND, CMD_OPEN_INTERFACE, LOG_TYPE_ERROR } = require('./constants')

const spinner = ora({ text: '' })

const open = () => {
  spinner.start('Initializing backend and interface server')

  exec(CMD_RUN_BACKEND, (err) => log(err, LOG_TYPE_ERROR))

  setTimeout(() => {
    spinner.succeed('Directory opened on web browser')
  }, 4000)

  exec(CMD_OPEN_INTERFACE, (err) => log(err, LOG_TYPE_ERROR))
}

module.exports = { open }
