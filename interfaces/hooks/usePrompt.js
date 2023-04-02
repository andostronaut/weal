const React = require('react')

const { fetchCmd } = require('../utils/fetch')

const { DEFAULT_PROMPT, PWD_CMD } = require('../constants')

const usePrompt = () => {
  const [prompt, setPrompt] = React.useState(DEFAULT_PROMPT)

  const fetchPwd = async () => {
    const res = await fetchCmd(PWD_CMD)
    setPrompt(`$ ${res}`)
  }

  fetchPwd()

  return prompt
}

module.exports = usePrompt
