import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import type { CaseCategory } from '../../../data/caseCategories'

type CaseCategoryCardProps = {
  category: CaseCategory
}

const CaseCategoryCard = ({ category }: CaseCategoryCardProps) => {
  const { t } = useTranslation()

  return (
    <Link
      to={`/cases/${category.slug}`}
      className="catalog-card catalog-card-additionally"
    >
      <img src={category.image} alt={t(category.titleKey)} />
      <span className="catalog-card__title">{t(category.titleKey)}</span>
    </Link>
  )
}

export default CaseCategoryCard
