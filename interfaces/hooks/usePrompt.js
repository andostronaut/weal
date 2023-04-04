const React = require('react')

const { fetchCmd } = require('../utils/fetch')

const { DEFAULT_PROMPT, CURRENT_DIR_CMD } = require('../constants')

const usePrompt = () => {
  const [prompt, setPrompt] = React.useState(DEFAULT_PROMPT)

  const fetchPwd = async () => {
    const res = await fetchCmd(CURRENT_DIR_CMD)
    setPrompt(`$ ${res}`)
  }

  fetchPwd()

  return prompt
}

module.exports = usePrompt
