const LOG_TYPE_SUCCESS = 'success'
const LOG_TYPE_ERROR = 'error'
const LOG_TYPE_WARNING = 'warning'
const LOG_TYPE_INFO = 'info'

const CMD_RUN_PROCESS = 'npm run process:start'
const CMD_OPEN_INTERFACE = 'npm run interface:build:start'

const CMD_PATH_WIN = '%AppData%/npm/node_modules/weal'
const CMD_PATH_UNIX = '~/usr/lib/node_modules/weal'

const START_MSG = 'Initializing backend and interface server'
const SUCCEED_MSG = 'Directory opened on web browser'

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
  SUCCEED_MSG
}
