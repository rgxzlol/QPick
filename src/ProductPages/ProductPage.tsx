import { Link, useParams } from 'react-router-dom'
import { getProductById, formatProductOldPrice, formatProductPrice } from '../data/products'
import './productPage.css'
import images from '../data/images'
import { useTranslation } from 'react-i18next'
import Footer from '../components/Footer/Footer'
import { useCart } from '../context/CartContext'

const ProductPage = () => {
  const { t } = useTranslation()
  const { id } = useParams()
  const { addToCart } = useCart()
  const product = getProductById(Number(id))

  if (!product) {
    return (
      <div className="product-page">
        <p className="product-page__not-found">{t('product.notFound')}</p>
        <Link to="/" className="product-page-button product-page-button__back">← {t('product.back')}</Link>
      </div>
    )
  }

  const oldPrice = formatProductOldPrice(product)

  return (
    <><div className="product-page">
      <Link to="/" className="product-page-button product-page-button__back">← {t('product.back')}</Link>
      <div className="product-box">
        <img className="product-page__image" src={product.image} alt={product.name} />
        <h1 className="product-page__title">{product.name}</h1>
        {product.price != null && product.price > 0 && (
          <div className="product-page__price">
            <span className="product-page__price-value">{formatProductPrice(product)}</span>
            {oldPrice && !product.hideOldPrice && (
              <span className="product-page__old-price">{oldPrice}</span>
            )}
            {product.salePercent != null && (
              <span className="product-page__sale">-{product.salePercent}%</span>
            )}
          </div>
        )}
      </div>
      <div className="product-buy">
        <button className="product-page-button">{t('product.buy')}</button>
        <button
          type="button"
          className="product-page-button product-page-button--cart"
          onClick={() => product && addToCart(product)}
        >
          <img src={images.cart} alt="" /> {t('product.addToCart')}
        </button>
      </div>
      <div className="product-other">

        {product.rating != null && (
          <p className="product-page__rating">Рейтинг: {product.rating}</p>
        )}
        {product.description && (
          <p className="product-page__description">{product.description}</p>
        )}
      </div>
    </div><Footer /></>
  )
}

export default ProductPage
