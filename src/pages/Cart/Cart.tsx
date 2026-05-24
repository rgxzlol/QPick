import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import images from '../../data/images'
import { getProductById, formatProductLineTotal, formatProductPrice, formatPriceValue } from '../../data/products'
import { useCart } from '../../context/CartContext'
import './cart.css'

const Cart = () => {
  const { t } = useTranslation()
  const { items, removeFromCart, updateQuantity, deliveryFee, grandTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="nullCart">
        <div className="nullCart__box">
          <img src={images.nullCart} alt="" />
          <span className="nullCart-title">{t('cart.emptyTitle')}</span>
          <p className="nullCart-desc">{t('cart.emptyDesc')}</p>
          <Link to="/" className="nullCart-btn">{t('cart.emptyBtn')}</Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="cart">
        <div className="cart__box">
          <h6 className="cart__title">{t('cart.cart')}</h6>

          <div className="cart__items">
            {items.map((item) => {
              const product = getProductById(item.productId)
              if (!product) return null

              return (
                <div key={item.productId} className="cart__box-content">
                  <button
                    type="button"
                    className="cart__delete"
                    onClick={() => removeFromCart(item.productId)}
                    aria-label={t('cart.remove')}
                  >
                    <img src={images.cartDelete} alt="" />
                  </button>
                  <div className="cart__box-content-item">
                    <img src={product.image} alt={product.name} />
                    <div className="cart__box-content-item-info">
                      <p className="cart__box-title">{product.name}</p>
                      <p className="cart__box-price">{formatProductPrice(product)}</p>
                    </div>
                  </div>
                  <div className="cart__box-info">
                    <div className="cart__box-count">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                        className="cart__box-count-btn"
                      >
                        <img src={images.minus} alt="" />
                      </button>
                      <p className="cart__box-count-value">{item.quantity}</p>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                        className="cart__box-count-btn"
                      >
                        <img src={images.plus} alt="" />
                      </button>
                    </div>
                    <p className="cart__box-item-total-price">
                      {formatProductLineTotal(product, item.quantity)}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="cart__box-delivery">
            <h6 className="cart__box-delivery-title">{t('cart.delivery')}</h6>
            <iframe
              className="contacts-geo"
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.6135191967844!2d76.8261876758054!3d43.2333391416845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df5639b2e7%3A0x72569966113f4d7d!2z0LzQuNC60YDQvtGA0LDQudC-0L0g0JDQutGB0LDQuS0z0JAgNjLQsCwg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1779356148575!5m2!1sru!2s"
              width="584"
              height="173"
              loading="lazy"
            />
            <div className="cart__box-little">
              <div className="cart__box-delivery-info">
                <img src={images.delivery} alt="" />
                <p className="cart__box-delivery-text">{t('cart.deliveryInfo')} ↓</p>
              </div>
              <p className="cart__box-delivery-price">{formatPriceValue(deliveryFee)}</p>
            </div>
          </div>
        </div>

        <div className="cart__total-price">
          <div className="cart-box">
            <p className="cart__total-price-title">{t('cart.total')}</p>
            <p className="cart__total-price-value">{formatPriceValue(grandTotal)}</p>
          </div>
          <Link to='/registration' type="button" className="cart__total-price-btn">{t('cart.buy')}</Link>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Cart
