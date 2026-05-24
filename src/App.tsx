import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import CatalogConstructor from './Constructor/CatalogConstructor'
import ProductPage from './ProductPages/ProductPage'
import CasesPage from './pages/CasesPage/CasesPage'
import Terms from './components/Terms/Terms'
import Contacts from './components/Contacts/Contacts'
import Cart from './pages/Cart/Cart'
import Favorite from './pages/Favorite/Favorite'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Registration from './pages/Registration/Registration'

const App = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="container">
        <Header />

        <Routes>
          <Route path="/" element={<CatalogConstructor />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cases/:type" element={<CasesPage />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
