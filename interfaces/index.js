const React = require('react')
const { createRoot } = require('react-dom/client')

require('./styles/main.css')

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const App = React.lazy(() => import('./app'))

root.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <App />
  </React.Suspense>
)
