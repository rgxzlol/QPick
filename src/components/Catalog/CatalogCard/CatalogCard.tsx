import type { MouseEvent } from 'react'
import { Link } from 'react-router-dom'
import type { Product } from '../../../data/products'
import { formatProductOldPrice, formatProductPrice } from '../../../data/products'
import images from '../../../data/images'
import { useFavorites } from '../../../context/FavoritesContext'

type CatalogCardProps = {
  product: Product
}

const CatalogCard = ({ product }: CatalogCardProps) => {
  const { isFavorite, toggleFavorite } = useFavorites()
  const favorited = isFavorite(product.id)

  const handleFavoriteClick = (e: MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(product.id)
  }

  const oldPrice = formatProductOldPrice(product)

  return (
    <Link to={`/product/${product.id}`} className="catalog-card">
      <button
        type="button"
        className="catalog-button"
        onClick={handleFavoriteClick}
      >
        <img
          src={favorited ? images.favoriteAddction : images.favorite}
          alt=""
        />
      </button>
      {product.showApple && (
        <button
          type="button"
          className={`catalog-button button-apple${product.appleHidden ? ' hidden' : ''}`}
          onClick={handleFavoriteClick}
        >
          <img src={images.apple} alt="" />
        </button>
      )}
      <img className="catalog-img" src={product.image} alt={product.name} />
      <div className="catalog__box-info">
        <span className="catalog-card__name">{product.name}</span>
        <div className="catalog__box-price">
          <p className={`catalog_price${product.priceAddStyle ? ' catalog_price-add' : ''}`}>
            {formatProductPrice(product)}
          </p>
          {oldPrice && (
            <p
              className={`catalog_price-addiction${product.hideOldPrice ? ' hidden' : ''}${product.priceAddStyle ? ' catalog_price-add catalog_price-sale-add' : ''}`}
            >
              {oldPrice}
            </p>
          )}
          {product.salePercent != null && (
            <p className="catalog_price-sale">-{product.salePercent}%</p>
          )}
        </div>
        {product.rating != null && (
          <div className="catalog__box-rating">
            <img className="catalog_rating" src={images.rating} alt="" />
            <span className="catalog__rating-count">{product.rating}</span>
          </div>
        )}
      </div>
    </Link>
  )
}

export default CatalogCard
