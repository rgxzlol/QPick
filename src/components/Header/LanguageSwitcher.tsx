import { useTranslation } from 'react-i18next'
import images from '../../data/images'

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    void i18n.changeLanguage(lng)
    localStorage.setItem('lng', lng)
  }

  const currentLng = i18n.resolvedLanguage ?? i18n.language
  const langClass = (lng: string) =>
    `mobile-menu__lang-btn${currentLng === lng ? ' mobile-menu__lang-btn--active' : ''}`

  return (
    <div className="mobile-menu__lang">
      <img className="mobile-menu__lang-icon" src={images.lang} alt="" />
      <button type="button" className={langClass('kk')} onClick={() => changeLanguage('kk')}>
        {t('footer.lang.kk')}
      </button>
      <button type="button" className={langClass('ru')} onClick={() => changeLanguage('ru')}>
        {t('footer.lang.ru')}
      </button>
      <button type="button" className={langClass('en')} onClick={() => changeLanguage('en')}>
        {t('footer.lang.en')}
      </button>
    </div>
  )
}

export default LanguageSwitcher
