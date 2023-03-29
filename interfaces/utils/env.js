const VAR = Object.freeze({
  BACKEND_HOST: 'localhost',
  BACKEND_PORT: 3221
})

const ENV = Object.freeze({
  BACKEND_URI: `http://${VAR.BACKEND_HOST}:${VAR.BACKEND_PORT}`
})

module.exports = { ENV }
