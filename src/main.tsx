import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n'
import './css/main.css'
import App from './App.tsx'
import { CartProvider } from './context/CartContext'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
)
