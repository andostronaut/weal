const ora = require('ora')

const exec = require('./utils/exec')

const { START_MSG, SUCCEED_MSG } = require('./constants')

const spinner = ora({ text: '' })

const open = () => {
  spinner.start(START_MSG)

  exec()
    .then(() => spinner.succeed(SUCCEED_MSG))
    .catch((err) => console.error(err))
}

module.exports = { open }
