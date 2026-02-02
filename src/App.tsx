import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { GlobalCss } from './styles'
import Home from './pages/Home'
import Perfil from './pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/Perfil" element={<Perfil />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container"></div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
