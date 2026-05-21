import { useTranslation } from 'react-i18next'
import phone from '../../../assets/img/iPhone-13-Pro-Max-silver-1000x1000 1.png'
import './main.css'
import CatalogCard from '../CatalogCard/CatalogCard'
import CaseCategoryCard from '../CaseCategoryCard/CaseCategoryCard'
import { caseCategories } from '../../../data/caseCategories'
import { headphoneProducts, wirelessProducts } from '../../../data/products'

const Main = () => {
    const { t } = useTranslation()

    return (
        <div className='main'>
            <div className="main__accessories">
                <h3 className="main__accessories-title">
                    {t('main.accessoriesTitle')}<br /> {t('main.accessoriesModel')}
                </h3>
                <img src={phone} alt="iPhone 13 Pro Max" />
            </div>
            <div className="catalog">
                <div className="catalog__category">
                    <span className="catalog__category-title catalog-additionally">{t('main.cases')}</span>
                    <div className="catalog__list">
                        {caseCategories.map((category) => (
                            <CaseCategoryCard key={category.slug} category={category} />
                        ))}
                    </div>

                    <span className="catalog__category-title">{t('main.headphones')}</span>
                    <div className="catalog__list">
                        {headphoneProducts.map((product) => (
                            <CatalogCard key={product.id} product={product} />
                        ))}
                    </div>

                    <span className='catalog__category-title'>{t('main.wirelessHeadphones')}</span>
                    <div className="catalog__list">
                        {wirelessProducts.map((product) => (
                            <CatalogCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
