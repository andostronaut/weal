const express = require('express')
const cors = require('cors')
const ora = require('ora')

const { exec } = require('child_process')

const { ENV } = require('./utils/env')
const { OS, SHELL, CURRENT_DIR_CMD, CURRENT_DIR, HEALTH_CMD, COMSPEC } = require('./constants')

const spinner = ora({ text: '' })

const app = express()

app.use(cors())

app.get('/process/:command', (req, res) => {
  const cmd = req.params.command

  if (cmd === HEALTH_CMD) {
    res.json({ data: true })
  } else if (cmd === CURRENT_DIR) {
    if (OS.IS_DARWIN || OS.IS_LINUX) {
      if (SHELL.IS_BASH) {
        exec(CURRENT_DIR_CMD.BASH, (_err, stdout) => res.json({ data: stdout }))
      }
    } else if (OS.IS_WINDOWS) {
      if (SHELL.IS_BASH) {
        exec(CURRENT_DIR_CMD.BASH, (_err, stdout) => res.json({ data: stdout }))
      } else if (SHELL.IS_CMD) {
        exec(CURRENT_DIR_CMD.CMD, (_err, stdout) => res.json({ data: stdout }))
      } else if (SHELL.IS_POWERSHELL) {
        exec(CURRENT_DIR_CMD.POWERSHELL, (_err, stdout) => res.json({ data: stdout }))
      } else if (COMSPEC.IS_CMD) {
        exec(CURRENT_DIR_CMD.CMD, (_err, stdout) => res.json({ data: stdout }))
      } else if (COMSPEC.IS_POWERSHELL) {
        exec(CURRENT_DIR_CMD.POWERSHELL, (_err, stdout) => res.json({ data: stdout }))
      }
    } else {
      res.json({ data: 'Error on current directory' })
    }
  } else {
    exec(cmd, (err, stdout) => {
      if (err) return res.json({ data: 'Error on processing commmand' })
      res.json({ data: stdout })
    })
  }
})

const start = () => {
  spinner.start('Server starting')
  app.listen(ENV.PORT, ENV.HOST, () => spinner.succeed('Server running'))
}

start()
