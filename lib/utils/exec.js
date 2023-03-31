const { exec: nodeExec } = require('child_process')

const { CMD_PATH_UNIX, CMD_PATH_WIN } = require('../constants')

const isDarwin = process.platform === 'darwin'
const isWindows = process.platform === 'win32'
const isLinux = process.platform === 'linux'

const exec = () => {
  return new Promise((resolve, reject) => {
    if (isDarwin || isLinux) {
      nodeExec('node', [`${CMD_PATH_UNIX}/lib/process.js`], (err) => reject(err))
    } else if (isWindows) {
      nodeExec('node', [`${CMD_PATH_WIN}/lib/process.js`], (err) => reject(err))
    }

    setTimeout(() => {
      resolve(true)
    }, 4000)

    if (isDarwin || isLinux) {
      nodeExec(
        `${CMD_PATH_UNIX}/node_modules/http-server/bin/http-server.js`,
        [`${CMD_PATH_UNIX}/dist -p 3222 -o --silent`],
        (err) => reject(err)
      )
    } else if (isWindows) {
      nodeExec(
        `${CMD_PATH_WIN}/node_modules/http-server/bin/http-server.js`,
        [`${CMD_PATH_WIN}/dist -p 3222 -o --silent`],
        (err) => reject(err)
      )
    }
  })
}

module.exports = exec
