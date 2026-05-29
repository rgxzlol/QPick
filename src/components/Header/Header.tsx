import { useEffect, useRef, useState, type MouseEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation } from 'react-router-dom'
import './header.css'
import images from '../../data/images'
import { useCart } from '../../context/CartContext'
import LanguageSwitcher from './LanguageSwitcher'

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
  'Realme',
  'Samsung',
  'Sony',
  'Vivo',
  'Xiaomi',
] as const

type Brand = (typeof brands)[number]

const Header = () => {
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const { totalCount } = useCart()

  const [activeBrand, setActiveBrand] = useState<Brand | null>('Apple')
  const [phoneBlockOpen, setPhoneBlockOpen] = useState(true)
  const [desktopMenuOpen, setDesktopMenuOpen] = useState(false)
  const [burgerOpen, setBurgerOpen] = useState(false)

  const desktopRef = useRef<HTMLDivElement>(null)
  const wrapRef = useRef<HTMLDivElement>(null)

  const closeBurger = () => setBurgerOpen(false)

  const toggleBrand = (e: MouseEvent, brand: Brand) => {
    e.stopPropagation()
    setActiveBrand((prev) => (prev === brand ? null : brand))
  }

  useEffect(() => {
    setBurgerOpen(false)
    setDesktopMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.classList.toggle('header-menu-open', burgerOpen)
    return () => document.body.classList.remove('header-menu-open')
  }, [burgerOpen])

  useEffect(() => {
    const handleClickOutside = (event: globalThis.MouseEvent) => {
      if (desktopRef.current?.contains(event.target as Node)) return
      if (wrapRef.current?.contains(event.target as Node) && burgerOpen) return
      setDesktopMenuOpen(false)
      setActiveBrand(null)
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [burgerOpen])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeBurger()
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [])

  const brandList = (onNavigate?: () => void) =>
    brands.map((brand) => (
      <div key={brand} className="menu-apple">
        <button
          type="button"
          onClick={(e) => toggleBrand(e, brand)}
          className={`menu-apple__title ${activeBrand === brand ? 'menu-apple__title--open' : ''}`}
        >
          {brand}
          <span className="menu-apple__chevron" aria-hidden />
        </button>
        <ul
          className={`menu-apple__list ${activeBrand === brand ? 'menu-apple__list--open' : ''}`}
        >
          {phoneModels.map((model) => (
            <li key={model}>
              <Link
                to="/"
                className={`menu-apple__link${model === 'iPhone 13 Pro Max' ? ' menu-apple__link--active' : ''}`}
                onClick={onNavigate}
              >
                {model}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    ))

  return (
    <div className="header-wrap" ref={wrapRef}>
      <header className="header">
        <Link to="/" className="logo header__logo">
          QPICK
        </Link>

        <div className="header__phone-selector" ref={desktopRef}>
          <button
            type="button"
            className={`header__label ${desktopMenuOpen ? 'header__label--open' : ''}`}
            onClick={() => setDesktopMenuOpen((p) => !p)}
            aria-expanded={desktopMenuOpen}
          >
            <img className="header__phone" src={images.phone} alt="" />
            <span className="header__choose">{t('header.choosePhone')}</span>
          </button>
          <div className={`menu menu--desktop ${desktopMenuOpen ? 'menu--open' : ''}`}>
            {brandList()}
          </div>
        </div>

        <div className="header__actions">
          <div className="header__heart_box">
            <Link to="/favorite" aria-label={t('footer.favorites')}>
              <img className="header__heart" src={images.heart} alt="" />
            </Link>
          </div>

          <div className="header__cart_box">
            <Link to="/cart" aria-label={t('footer.cart')}>
              <img className="header__cart" src={images.cart} alt="" />
            </Link>
            {totalCount > 0 && (
              <span className="header__cart-count">{totalCount}</span>
            )}
          </div>

          <button
            type="button"
            className={`header__burger ${burgerOpen ? 'header__burger--open' : ''}`}
            onClick={() => setBurgerOpen((p) => !p)}
            aria-label={burgerOpen ? t('header.closeMenu') : t('header.openMenu')}
            aria-expanded={burgerOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <div
        className={`mobile-menu ${burgerOpen ? 'mobile-menu--open' : ''}`}
        aria-hidden={!burgerOpen}
      >
        <button
          type="button"
          className={`mobile-menu__phone-row ${phoneBlockOpen ? 'mobile-menu__phone-row--open' : ''}`}
          onClick={() => setPhoneBlockOpen((p) => !p)}
        >
          <img src={images.phone} alt="" />
          <span>{t('header.choosePhone')}</span>
          <span className="mobile-menu__chevron" aria-hidden />
        </button>

        {phoneBlockOpen && (
          <div className="mobile-menu__brands">{brandList(closeBurger)}</div>
        )}

        <nav className="mobile-menu__nav">
          <Link to="/favorite" className="mobile-menu__nav-link" onClick={closeBurger}>
            <img src={images.heart} alt="" />
            {t('footer.favorites')}
          </Link>
          <Link to="/terms" className="mobile-menu__nav-link" onClick={closeBurger}>
            <span className="mobile-menu__icon mobile-menu__icon--terms" aria-hidden />
            {t('footer.terms')}
          </Link>
          <Link to="/contacts" className="mobile-menu__nav-link" onClick={closeBurger}>
            <img src={images.phoneMark} alt="" />
            {t('footer.contacts')}
          </Link>
        </nav>

        <LanguageSwitcher />
      </div>

      <div
        className={`header__overlay ${burgerOpen ? 'header__overlay--visible' : ''}`}
        onClick={closeBurger}
        aria-hidden={!burgerOpen}
      />
    </div>
  )
}

export default Header
