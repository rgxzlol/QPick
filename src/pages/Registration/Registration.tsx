import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Footer from '../../components/Footer/Footer'
import images from '../../data/images'
import { getProductById, formatProductLineTotal, formatPriceValue } from '../../data/products'
import { useCart } from '../../context/CartContext'
import './registration.css'

type AddressForm = {
  city: string
  street: string
  house: string
  entrance: string
  apartment: string
  phone: string
  promo: string
}

const initialForm: AddressForm = {
  city: '',
  street: '',
  house: '',
  entrance: '',
  apartment: '',
  phone: '',
  promo: '',
}

const Registration = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { items, deliveryFee, grandTotal, clearCart } = useCart()
  const [form, setForm] = useState<AddressForm>(initialForm)
  const [error, setError] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)

  if (items.length === 0 && !isSuccess) {
    return <Navigate to="/cart" replace />
  }

  const updateField = (field: keyof AddressForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError('')
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!form.city.trim() || !form.street.trim() || !form.house.trim()) {
      setError(t('checkout.errors.address'))
      return
    }

    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) {
      setError(t('checkout.errors.phone'))
      return
    }

    clearCart()
    setIsSuccess(true)
  }

  if (isSuccess) {
    return (
      <>
        <div className="register register--success">
          <span className="register__title">{t('checkout.successTitle')}</span>
          <p className="register__success-text">{t('checkout.successDesc')}</p>
          <button
            type="button"
            className="register-btn"
            onClick={() => navigate('/')}
          >
            {t('checkout.successBtn')}
          </button>
        </div>
        <Footer />
      </>
    )
  }

  return (
    <>
      <form className="register" onSubmit={handleSubmit}>
        <span className="register__title">{t('checkout.title')}</span>

        {error && <p className="register__error">{error}</p>}

        <div className="register__box">
          <div className="register__info div1">
            <h6 className="register__info-title">{t('checkout.deliveryTitle')}</h6>
            <p className="register__info-price">{formatPriceValue(deliveryFee)}</p>
            <div className="register__geo-box">
              <iframe
                className="contacts-geo"
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.6135191967844!2d76.8261876758054!3d43.2333391416845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df5639b2e7%3A0x72569966113f4d7d!2z0LzQuNC60YDQvtGA0LDQudC-0L0g0JDQutGB0LDQuS0z0JAgNjLQsCwg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1779356148575!5m2!1sru!2s"
                width="100%"
                height="100%"
                loading="lazy"
              />
            </div>
            <div className="register__info-text">
              <img src={images.geo} alt="" />
              <span className="register__info-delivery">{t('checkout.addressLabel')}</span>
            </div>
            <div className="register__info-geo">
              <label className="input__box giv1">
                <input
                  placeholder={t('checkout.city')}
                  type="text"
                  className="register__info-input"
                  value={form.city}
                  onChange={(e) => updateField('city', e.target.value)}
                />
                <img src={images.pen} alt="" />
              </label>
              <label className="input__box giv2">
                <input
                  placeholder={t('checkout.street')}
                  type="text"
                  className="register__info-input"
                  value={form.street}
                  onChange={(e) => updateField('street', e.target.value)}
                />
                <img src={images.pen} alt="" />
              </label>
              <label className="input__box giv3">
                <input
                  placeholder={t('checkout.house')}
                  type="text"
                  className="register__info-input"
                  value={form.house}
                  onChange={(e) => updateField('house', e.target.value)}
                />
                <img src={images.pen} alt="" />
              </label>
              <label className="input__box giv4">
                <input
                  placeholder={t('checkout.entrance')}
                  type="text"
                  className="register__info-input"
                  value={form.entrance}
                  onChange={(e) => updateField('entrance', e.target.value)}
                />
                <img src={images.pen} alt="" />
              </label>
              <label className="input__box giv5">
                <input
                  placeholder={t('checkout.apartment')}
                  type="text"
                  className="register__info-input"
                  value={form.apartment}
                  onChange={(e) => updateField('apartment', e.target.value)}
                />
                <img src={images.pen} alt="" />
              </label>
            </div>
          </div>

          <div className="register__info div2">
            <span className="register__info-title">{t('checkout.yourOrder')}</span>
            <div className="register-order-items">
              {items.map((item) => {
                const product = getProductById(item.productId)
                if (!product) return null

                return (
                  <div key={item.productId} className="register__info-list">
                    <p className="register-count">{item.quantity}×</p>
                    <p className="register-info">{product.name}</p>
                    <p className="register-price">
                      {formatProductLineTotal(product, item.quantity)}
                    </p>
                  </div>
                )
              })}
            </div>
            <div className="register__info-box">
              <span className="register__info-label">{t('checkout.delivery')}</span>
              <p className="register__info-value">{formatPriceValue(deliveryFee)}</p>
            </div>
            <div className="register__info-box">
              <span className="register__info-label register__info-label--total">
                {t('checkout.toPay')}
              </span>
              <p className="register__info-value register__info-value--total">
                {formatPriceValue(grandTotal)}
              </p>
            </div>
          </div>

          <div className="register__info div3">
            <span className="register__info-title register-dop">{t('checkout.payment')}</span>
            <div className="register__delivery-box">
              <img src={images.visa} alt="" />
              <span className="register__delivery-title">{t('checkout.kaspi')}</span>
            </div>
            <div className="register__delivery-box">
              <img src={images.promo} alt="" />
              <input
                placeholder={t('checkout.promo')}
                className="register-input"
                value={form.promo}
                onChange={(e) => updateField('promo', e.target.value)}
              />
            </div>
          </div>

          <div className="register__info div4">
            <span className="register__info-title">{t('checkout.phoneTitle')}</span>
            <label className="input__box input-dop">
              <input
                className="register__info-phone"
                placeholder={t('checkout.phonePlaceholder')}
                type="tel"
                value={form.phone}
                onChange={(e) => updateField('phone', e.target.value)}
              />
              <img src={images.pen} alt="" />
            </label>
          </div>

          <div className="div5">
            <button type="submit" className="register-btn">
              {t('checkout.submit')}
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </>
  )
}

export default Registration
