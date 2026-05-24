import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import CatalogCard from '../../components/Catalog/CatalogCard/CatalogCard'
import { useFavorites } from '../../context/FavoritesContext'
import images from '../../data/images'
import '../../components/Catalog/Main/main.css'
import './favorite.css'

const Favorite = () => {
  const { t } = useTranslation()
  const { favoriteHeadphones, favoriteWireless, totalCount } = useFavorites()

  if (totalCount === 0) {
    return (
      <>
        <div className="favorite-empty">
          <div className="favorite-empty__box">
            <img src={images.nullCart} alt="" />
            <span className="favorite-empty__title">{t('favorites.emptyTitle')}</span>
            <p className="favorite-empty__desc">{t('favorites.emptyDesc')}</p>
            <Link to="/" className="favorite-empty__btn">{t('favorites.emptyBtn')}</Link>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="favorite">
        <h1 className="favorite__title">{t('favorites.title')}</h1>

        <div className="catalog">
          {favoriteHeadphones.length > 0 && (
            <div className="catalog__category">
              <span className="catalog__category-title">{t('main.headphones')}</span>
              <div className="catalog__list">
                {favoriteHeadphones.map((product) => (
                  <CatalogCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}

          {favoriteWireless.length > 0 && (
            <div className="catalog__category">
              <span className="catalog__category-title">{t('main.wirelessHeadphones')}</span>
              <div className="catalog__list">
                {favoriteWireless.map((product) => (
                  <CatalogCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Favorite
