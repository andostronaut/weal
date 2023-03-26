const React = require('react')
const { createRoot } = require('react-dom/client')

require('./styles/main.css')

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const App = require('./app')

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
