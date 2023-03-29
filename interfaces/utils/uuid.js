const { v4: uuidv4 } = require('uuid')

const _id = () => {
  return uuidv4()
}

module.exports = { _id }
