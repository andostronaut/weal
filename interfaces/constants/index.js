const APP_NAME = 'Weal'

const KEY_MODE = 'mode'
const KEY_CLEAR = 'clear'

const CMD_MODE_LIGHT = 'mode --light'
const CMD_MODE_DARK = 'mode --dark'

const LIGHT_THEME = 'light'
const DARK_THEME = 'dark'

const LIGHT_THEME_KEY = 0
const DARK_THEME_KEY = 1

const DEFAULT_OUTPUTS_LIST = [
  'Welcome to weal interface',
  '-------------------------',
  'The following example commands are provided:',
  '`mode --light`` will change to light theme.',
  '`mode --dark`` will change to dark theme.',
  '`clear` will clear the terminal.'
]

const KEY_CODE_ARROW_UP = 38

const TERMINAL_HEIGHT = 500

const KEY_THEME = 'theme'

const KEY_HISTORY = 'history'

const BASIC_CMDS = ['mode --light', 'mode --dark', 'clear']

const DEFAULT_PROMPT = '$'

const PWD_CMD = 'pwd'

const APP_LOADER_MSG = 'Checking process is ready...'
const FALLBACK_LOADER_MSG = 'Sorry, please re-open directory we encountered an error'

module.exports = {
  APP_NAME,
  KEY_MODE,
  KEY_CLEAR,
  CMD_MODE_LIGHT,
  CMD_MODE_DARK,
  LIGHT_THEME,
  DARK_THEME,
  LIGHT_THEME_KEY,
  DARK_THEME_KEY,
  DEFAULT_OUTPUTS_LIST,
  KEY_CODE_ARROW_UP,
  TERMINAL_HEIGHT,
  KEY_THEME,
  KEY_HISTORY,
  BASIC_CMDS,
  DEFAULT_PROMPT,
  PWD_CMD,
  APP_LOADER_MSG,
  FALLBACK_LOADER_MSG
}
