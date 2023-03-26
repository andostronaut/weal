const React = require('react')
const ReactDOM = require('react-dom')

require('./styles/main.css')

const Terminal = require('./utils/terminal')

const App = () => {
  return (
    <div className='terb-interface-container'>
      <Terminal />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
