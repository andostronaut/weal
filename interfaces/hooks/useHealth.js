const React = require('react')

const { fecthHealth } = require('../utils/fetch')

const useHealth = () => {
  const [isReady, setIsReady] = React.useState(false)

  const verifyHealth = async () => {
    const status = await fecthHealth()
    if (status) {
      setIsReady(true)
    }
  }

  verifyHealth()

  return isReady
}

module.exports = useHealth
