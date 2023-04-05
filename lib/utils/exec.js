const { exec: nodeExec } = require('child_process')

const { OS, PROCESS_CMD, INTERFACE_CMD, DIR } = require('../constants')

const exec = () => {
  return new Promise((resolve, reject) => {
    if (OS.IS_DARWIN || OS.IS_LINUX) {
      if (DIR.IS_NVM) {
        nodeExec(PROCESS_CMD.UNIX_NVM, (err) => reject(err))
      } else {
        nodeExec(PROCESS_CMD.UNIX, (err) => reject(err))
      }
    } else if (OS.IS_WINDOWS) {
      nodeExec(PROCESS_CMD.WINDOWS, (err) => reject(err))
    }

    setTimeout(() => {
      if (OS.IS_DARWIN || OS.IS_LINUX) {
        if (DIR.IS_NVM) {
          nodeExec(INTERFACE_CMD.UNIX_NVM, (err) => reject(err))
        } else {
          nodeExec(INTERFACE_CMD.UNIX, (err) => reject(err))
        }
      } else if (OS.IS_WINDOWS) {
        nodeExec(INTERFACE_CMD.WINDOWS, (err) => reject(err))
      }

      resolve(true)
    }, 4000)
  })
}

module.exports = exec
