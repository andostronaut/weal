const { exec: nodeExec } = require('child_process')

const { OS, PROCESS_CMD, INTERFACE_CMD } = require('../constants')

const exec = () => {
  return new Promise((resolve, reject) => {
    if (OS.IS_DARWIN || OS.IS_LINUX) {
      nodeExec(PROCESS_CMD.UNIX, (err) => reject(err))
    } else if (OS.IS_WINDOWS) {
      nodeExec(PROCESS_CMD.WINDOWS, (err) => reject(err))
    }

    setTimeout(() => {
      if (OS.IS_DARWIN || OS.IS_LINUX) {
        nodeExec(INTERFACE_CMD.UNIX, (err) => reject(err))
      } else if (OS.IS_WINDOWS) {
        nodeExec(INTERFACE_CMD.WINDOWS, (err) => reject(err))
      }

      resolve(true)
    }, 4000)
  })
}

module.exports = exec
