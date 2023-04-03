const React = require('react')
const { createRoot } = require('react-dom/client')

const Loader = require('./components/loader')

const { FALLBACK_LOADER_MSG } = require('./constants')

require('./styles/main.css')

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

const App = React.lazy(() => import('./app'))

root.render(
  <React.Suspense fallback={<Loader msg={FALLBACK_LOADER_MSG} />}>
    <App />
  </React.Suspense>
)
