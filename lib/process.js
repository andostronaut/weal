const express = require('express')
const cors = require('cors')
const ora = require('ora')

const { exec } = require('child_process')

const { ENV } = require('./utils/env')
const { OS, SHELL, CURRENT_DIR_CMD, CURRENT_DIR } = require('./constants')

const spinner = ora({ text: '' })

const app = express()

app.use(cors())

app.get('/health', (req, res) => {
  res.json({
    status: true
  })
})

app.get('/process/:command', (req, res) => {
  const cmd = req.params.command

  if (cmd === CURRENT_DIR) {
    if (OS.IS_DARWIN || OS.IS_LINUX) {
      if (SHELL.IS_BASH) {
        exec(CURRENT_DIR_CMD.BASH, (err, stdout) => res.send(stdout))
      }
    } else if (OS.IS_WINDOWS) {
      if (SHELL.IS_CMD) {
        exec(CURRENT_DIR_CMD.CMD, (err, stdout) => res.send(stdout))
      } else if (SHELL.IS_POWERSHELL) {
        exec(CURRENT_DIR_CMD.POWERSHELL, (err, stdout) => res.send(stdout))
      } else if (SHELL.IS_BASH) {
        exec(CURRENT_DIR_CMD.BASH, (err, stdout) => res.send(stdout))
      }
    }
  } else {
    exec(cmd, (err, stdout) => {
      if (err) return res.send('Error on processing commmand')

      res.send(stdout)
    })
  }
})

const start = () => {
  spinner.start('Server starting')
  app.listen(ENV.PORT, ENV.HOST, () => spinner.succeed('Server running'))
}

start()
