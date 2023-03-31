const ora = require('ora')

const log = require('./utils/log')
const exec = require('./utils/exec')

const { LOG_TYPE_ERROR, START_MSG, SUCCEED_MSG } = require('./constants')

const spinner = ora({ text: '' })

const open = () => {
  spinner.start(START_MSG)

  exec()
    .then(() => spinner.succeed(SUCCEED_MSG))
    .catch((err) => log(err, LOG_TYPE_ERROR))
}

module.exports = { open }
