const express = require('express')
const cors = require('cors')
const { exec } = require('child_process')

const HOST = '0.0.0.0'
const PORT = 5000

const app = express()

app.use(cors())

app.get('/process/:command', (req, res) => {
  const cmd = req.params.command

  exec(cmd, (err, stdout) => {
    if (err) {
      return res.send(err)
    }

    res.send(stdout)
  })
})

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})
