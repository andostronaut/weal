const React = require('react')

const Input = require('../components/input')

const { _id } = require('../utils/uuid')

const useInput = () => {
  const [inputs, setInputs] = React.useState([])

  const groupInput = (input) => {
    const ipts = [...inputs]
    ipts.push(<Input key={_id()} value={input} />)
    setInputs(ipts)
  }

  return { inputs, groupInput }
}

module.exports = useInput
