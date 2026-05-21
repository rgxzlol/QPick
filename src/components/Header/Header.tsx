import { useTranslation } from 'react-i18next'
import './header.css'
import images from '../../data/images.ts'


const Header = () => {
    const { t } = useTranslation()

    return (
        <div className='header'>
            <div className="header__box2">
                <a href='' className='logo'>QPICK</a>
                <label className='header__label'>
                    <img className='header__phone' src={images.phone} alt="" />
                    <span className='header__choose'>{t('header.choosePhone')}</span>
                </label>
            </div>
            <div className="header__box">
                <div className="header__heart_box">
                    <img className='header__heart' src={images.heart} alt="" />
                    <span className='header__heart-count'>0</span>
                </div>
                <div className="header__cart_box">
                    <img className='header__cart' src={images.cart} alt="" />
                    <span className='header__cart-count'>0</span>
                </div>
            </div>
        </div>
    )
}

export default Header