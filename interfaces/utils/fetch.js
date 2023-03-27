const fetchCmd = async (input) => {
  const host = 'http://localhost:5000'

  const res = await fetch(host + '/process/' + input)
  const cmdRes = await res.text()

  return cmdRes
}

module.exports = { fetchCmd }
