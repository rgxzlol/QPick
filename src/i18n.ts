import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ru from './locales/ru.json'
import kk from './locales/kk.json'
import en from './locales/en.json'

const savedLng = localStorage.getItem('lng')
const supportedLngs = ['ru', 'kk', 'en'] as const

i18n.use(initReactI18next).init({
  resources: {
    ru: { translation: ru },
    kk: { translation: kk },
    en: { translation: en },
  },
  lng: savedLng && supportedLngs.includes(savedLng as (typeof supportedLngs)[number])
    ? savedLng
    : 'ru',
  fallbackLng: 'ru',
  supportedLngs: [...supportedLngs],
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
