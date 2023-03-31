const NODE = 'node'

const LOG_TYPE_SUCCESS = 'success'
const LOG_TYPE_ERROR = 'error'
const LOG_TYPE_WARNING = 'warning'
const LOG_TYPE_INFO = 'info'

const CMD_RUN_PROCESS = 'npm run process:start'
const CMD_OPEN_INTERFACE = 'npm run interface:build:start'

const CMD_PATH_UNIX = '~/usr/lib/node_modules/weal'
const CMD_PATH_WIN = '%AppData%/npm/node_modules/weal'

const START_MSG = 'Initializing backend and interface server'
const SUCCEED_MSG = 'Directory opened on web browser'

const OS_TYPE = Object.freeze({
  DARWIN: 'darwin',
  LINUX: 'linux',
  WINDOWS: 'win32'
})

const OS = Object.freeze({
  IS_DARWIN: process.platform === OS_TYPE.DARWIN,
  IS_LINUX: process.platform === OS_TYPE.LINUX,
  IS_WINDOWS: process.platform === OS_TYPE.WINDOWS
})

const PROCESS_CMD = Object.freeze({
  UNIX: `${NODE} ${CMD_PATH_UNIX}/lib/process.js`,
  WINDOWS: `${NODE} ${CMD_PATH_WIN}/lib/process.js`
})

const HTTP_SERVER_CLI = Object.freeze({
  UNIX: `${CMD_PATH_UNIX}/node_modules/http-server/bin/http-server`,
  WINDOWS: `${CMD_PATH_WIN}/node_modules/http-server/bin/http-server`
})

const INTERFACE_CMD = Object.freeze({
  UNIX: `${NODE} ${HTTP_SERVER_CLI.UNIX} ${CMD_PATH_UNIX}/dist -p 3222 -o --silent`,
  WINDOWS: `${NODE} ${HTTP_SERVER_CLI.WINDOWS} ${CMD_PATH_WIN}/dist -p 3222 -o --silent`
})

module.exports = {
  LOG_TYPE_SUCCESS,
  LOG_TYPE_ERROR,
  LOG_TYPE_WARNING,
  LOG_TYPE_INFO,
  CMD_RUN_PROCESS,
  CMD_OPEN_INTERFACE,
  CMD_PATH_WIN,
  CMD_PATH_UNIX,
  START_MSG,
  SUCCEED_MSG,
  OS,
  PROCESS_CMD,
  INTERFACE_CMD
}
