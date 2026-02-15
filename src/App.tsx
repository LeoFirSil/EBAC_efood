import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalCss } from './styles'
import { store } from './store'
import Rotas from './routes'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <div className="container"></div>
        <Rotas />
      </BrowserRouter>
    </Provider>
  )
}

export default App
