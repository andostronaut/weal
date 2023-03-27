const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')

const HOST = '127.0.0.1'
const PORT = 3221

const app = express()

app.use(cors())

app.get('/process/:command', (req, res) => {
  const cmd = req.params.command

  exec(cmd, (err, stdout) => {
    if (err) {
      return res.send('Command not found')
    }

    res.send(stdout)
  })
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})
