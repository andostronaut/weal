const React = require('react')
const { createRoot } = require('react-dom/client')

const Loader = require('./components/loader')

require('./styles/main.css')

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const App = React.lazy(() => import('./app'))

root.render(
  <React.Suspense fallback={<Loader />}>
    <App />
  </React.Suspense>
)
