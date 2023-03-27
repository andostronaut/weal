const fetchCmd = async (input) => {
  const host = 'http://localhost:5000'

  try {
    const res = await fetch(host + '/process/' + input)
    const cmdRes = await res.text()

    return cmdRes
  } catch (error) {
    console.error(error)
    return 'Commmand not found'
  }
}

module.exports = { fetchCmd }
