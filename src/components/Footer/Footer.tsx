import { useTranslation } from 'react-i18next'
import './footer.css'
import images from '../../data/images'
import { Link } from 'react-router-dom'

const Footer = () => {
    const { t, i18n } = useTranslation()

    const changeLanguage = (lng: string) => {
        void i18n.changeLanguage(lng)
        localStorage.setItem('lng', lng)
    }

    const currentLng = i18n.resolvedLanguage ?? i18n.language

    const langClass = (lng: string) =>
        `footer__langMenu-link${currentLng === lng ? ' footer__langMenu-link--active' : ''}`

    return (
        <div className='footer'>
            <Link to="/" className="logo footer__logo">
                QPick
            </Link>
            <ul className="footer__menu">
                <li><Link to="/favorite" className="footer__menu-link">{t('footer.favorites')}</Link></li>
                <li><Link to="/cart" className="footer__menu-link">{t('footer.cart')}</Link></li>
                <li><Link to="/contacts" className="footer__menu-link">
                    {t('footer.contacts')}
                </Link></li>
            </ul>
            <div className="footer__box">
                <Link to="/terms" className="footer-text">
                    {t('footer.terms')}
                </Link>
                <div className="footer-lilBox">
                    <img src={images.lang} alt="Language" />
                    <ul className="footer__langMenu">
                        <li>
                            <button type="button" className={langClass('kk')} onClick={() => changeLanguage('kk')}>
                                {t('footer.lang.kk')}
                            </button>
                        </li>
                        <li>
                            <button type="button" className={langClass('ru')} onClick={() => changeLanguage('ru')}>
                                {t('footer.lang.ru')}
                            </button>
                        </li>
                        <li>
                            <button type="button" className={langClass('en')} onClick={() => changeLanguage('en')}>
                                {t('footer.lang.en')}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
            <ul className="footer__contactMenu">
                <li><a href="" className="footer__contactMenu-link"><img src={images.vk} alt="VK" /></a></li>
                <li><a href="" className="footer__contactMenu-link"><img src={images.insta} alt="Instagram" /></a></li>
                <li><a href="" className="footer__contactMenu-link"><img src={images.tg} alt="Telegram" /></a></li>
                <li><a href="" className="footer__contactMenu-link"><img src={images.wa} alt="Whatsapp" /></a></li>
            </ul>
        </div>
    )
}

export default Footer