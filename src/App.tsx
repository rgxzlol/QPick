import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CatalogConstructor from './Constructor/CatalogConstructor'
import ProductPage from './ProductPages/ProductPage'
import CasesPage from './pages/CasesPage/CasesPage'
import Terms from './components/Terms/Terms'
import Contacts from './components/Contacts/Contacts'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <HashRouter>
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<CatalogConstructor />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cases/:type" element={<CasesPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
