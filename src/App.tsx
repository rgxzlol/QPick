import { HashRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header/Header'
import CatalogConstructor from './Constructor/CatalogConstructor'
import ProductPage from './ProductPages/ProductPage'
import CasesPage from './pages/CasesPage/CasesPage'

const App = () => {
  return (
    <HashRouter>
      <div className='container'>
        <Header />

        <Routes>
          <Route
            path='/'
            element={<CatalogConstructor />}
          />

          <Route
            path='/product/:id'
            element={<ProductPage />}
          />

          <Route
            path='/cases/:type'
            element={<CasesPage />}
          />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App