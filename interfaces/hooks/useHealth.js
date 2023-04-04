const React = require('react')

const { fetchCmd } = require('../utils/fetch')

const { HEALTH_CMD } = require('../constants')

const useHealth = () => {
  const [isReady, setIsReady] = React.useState(false)

  const verifyHealth = async () => {
    const status = await fetchCmd(HEALTH_CMD)
    if (status) {
      setIsReady(true)
    }
  }

  verifyHealth()

  return isReady
}

module.exports = useHealth
