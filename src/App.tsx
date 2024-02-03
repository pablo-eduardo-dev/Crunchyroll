import Footer from './layout/Footer'
import Header from './layout/Header'

import Home from './pages/Home'
import Navegar from './pages/Navegar'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/navegar' element={<Navegar />} />
      </Routes>
      <Footer />
    </Router>
  )
}
