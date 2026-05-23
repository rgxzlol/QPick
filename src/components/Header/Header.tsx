import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './header.css'
import images from '../../data/images'
import { useCart } from '../../context/CartContext'

const phoneModels = [
  'iPhone 12',
  'iPhone 12 Max',
  'iPhone 13',
  'iPhone 13 Max',
  'iPhone 13 Pro Max',
  'iPhone 14',
]

const brands = [
  'Apple',
  'INOI',
  'Nokia',
  'Oppo',
  'Xiaomi',
  'Realme',
  'Samsung',
  'Sony',
  'Vivo',
] as const

type Brand = (typeof brands)[number]

const Header = () => {
  const { t } = useTranslation()
  const { totalCount } = useCart()

  const [activeMenu, setActiveMenu] = useState<Brand | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)

  const selectorRef = useRef<HTMLDivElement>(null)

  const toggleBrand = (e: MouseEvent, brand: Brand) => {
    e.stopPropagation()

    setActiveMenu((prev) => (prev === brand ? null : brand))
  }

  const toggleMenuOpen = () => {
    setMenuOpen((prev) => {
      const next = !prev

      if (!next) {
        setActiveMenu(null)
      }

      return next
    })
  }

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (
        selectorRef.current &&
        !selectorRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false)
        setActiveMenu(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="header">
      <div className="header__box2">
        <Link to="/" className="logo">
          QPICK
        </Link>

        <div className="header__phone-selector" ref={selectorRef}>
          <button
            type="button"
            className={`header__label ${menuOpen ? 'header__label--open' : ''
              }`}
            onClick={toggleMenuOpen}
          >
            <img className="header__phone" src={images.phone} alt="" />

            <span className="header__choose">
              {t('header.choosePhone')}
            </span>
          </button>

          <div className={`menu ${menuOpen ? 'menu--open' : ''}`}>
            {brands.map((brand) => (
              <div key={brand} className="menu-apple">
                <button
                  type="button"
                  onClick={(e) => toggleBrand(e, brand)}
                  className={`menu-apple__title ${activeMenu === brand ? 'active' : ''
                    }`}
                >
                  {brand}
                </button>

                <ul
                  className={`menu-apple__list ${activeMenu === brand
                      ? 'menu-apple__list--open'
                      : ''
                    }`}
                >
                  {phoneModels.map((model) => (
                    <li key={model}>
                      <Link to="/" className="menu-apple__link">
                        {model}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="header__box">
        <div className="header__heart_box">
          <img className="header__heart" src={images.heart} alt="" />

          <span className="header__heart-count">0</span>
        </div>

        <div className="header__cart_box">
          <Link to="/cart">
            <img className="header__cart" src={images.cart} alt="" />
          </Link>

          {totalCount > 0 && (
            <span className="header__cart-count">{totalCount}</span>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header