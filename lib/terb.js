const { exec } = require('child_process')
const ora = require('ora')

const log = require('./utils/log')
const constants = require('./constants')

const spinner = ora({ text: '' })

const open = () => {
  spinner.start('Wait until it opened on web browser')

  setTimeout(() => {
    spinner.succeed('Directory opened on web browser')
  }, 4000)

  exec(constants.CMD_OPEN_INTERFACE, (err) => {
    if (err) {
      return log(err, constants.LOG_TYPE_ERROR)
    }
  })
}

module.exports = { open }
