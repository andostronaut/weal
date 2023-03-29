const express = require('express')
const cors = require('cors')

const { exec } = require('child_process')

const { ENV } = require('./utils/env')

const app = express()

app.use(cors())

app.get('/process/:command', (req, res) => {
  const cmd = req.params.command

  exec(cmd, (err, stdout) => {
    if (err) return res.send('Error on processing commmand')

    res.send(stdout)
  })
})

app.listen(ENV.PORT, ENV.HOST)
