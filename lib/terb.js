const { exec } = require('child_process')
const ora = require('ora')

const log = require('./utils/log')
const constants = require('./constants')

const spinner = ora({ text: '' })

const open = () => {
  spinner.start('Opening directory on web browser')

  exec('ls', (err, stdout) => {
    if (err) {
      log(err, constants.LOG_TYPE_ERROR)
      spinner.stop()
      return
    }

    spinner.succeed('Directory opened on web browser, go on url http://localhost:3000')
    log(stdout, constants.LOG_TYPE_INFO)
  })
}

module.exports = { open }
