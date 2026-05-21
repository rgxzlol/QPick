import { Link, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getCaseCategoryBySlug } from '../../data/caseCategories'
import Footer from '../../components/Footer/Footer'
import './casesPage.css'

const CasesPage = () => {
  const { type } = useParams()
  const { t } = useTranslation()
  const category = getCaseCategoryBySlug(type)

  if (!category) {
    return (
      <div className="cases-page">
        <p>{t('cases.notFound')}</p>
        <Link to="/" className="cases-page__back">{t('cases.back')}</Link>
      </div>
    )
  }

  return (
    <>
      <div className="cases-page">
        <Link to="/" className="cases-page__back">{t('cases.back')}</Link>
        <div className="cases-page__header">
          <img
            className="cases-page__preview"
            src={category.image}
            alt={t(category.titleKey)}
          />
          <h1 className="cases-page__title">{t(category.titleKey)}</h1>
        </div>
        <p className="cases-page__hint">{t('cases.placeholder')}</p>
        <div className="cases-page__grid catalog__list" />
      </div>
      <Footer />
    </>
  )
}

export default CasesPage
