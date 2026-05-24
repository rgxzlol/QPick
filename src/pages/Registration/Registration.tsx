import Footer from '../../components/Footer/Footer'
import images from '../../data/images'
import './registration.css'

const Registration = () => {
    return (
        <><div className='register'>
            <span className="register__title">Оформление заказа</span>
            <div className="register__box">
                <div className="register__info div1">
                    <h6 className="register__info-title">Доставка курьером</h6>
                    <p className="register__info-price"> 499 ₸</p>
                    <iframe
                        className="contacts-geo"
                        title="map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.6135191967844!2d76.8261876758054!3d43.2333391416845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df5639b2e7%3A0x72569966113f4d7d!2z0LzQuNC60YDQvtGA0LDQudC-0L0g0JDQutGB0LDQuS0z0JAgNjLQsCwg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1779356148575!5m2!1sru!2s"
                        width="460"
                        height="200"
                        loading="lazy" />
                    <div className="register__info-text">
                        <img src={images.geo} alt="" />
                        <span className="register__info-delivery">Адрес доставки</span>
                    </div>
                    <div className="register__info-geo">
                        <label className="input__box giv1">
                            <input placeholder='Город ' type="text" className="register__info-input" />
                            <img src={images.pen} alt="" />
                        </label>
                        <label className="input__box giv2">
                            <input placeholder='Улица / Район' type="text" className="register__info-input" />
                            <img src={images.pen} alt="" />
                        </label>
                        <label className="input__box giv3">
                            <input placeholder='Дом' type="text" className="register__info-input" />
                            <img src={images.pen} alt="" />
                        </label>
                        <label className="input__box giv4">
                            <input placeholder='Подъезд' type="text" className="register__info-input" />
                            <img src={images.pen} alt="" />
                        </label>
                        <label className="input__box giv5">
                            <input placeholder='Квартира' type="text" className="register__info-input" />
                            <img src={images.pen} alt="" />
                        </label>
                    </div>
                </div>
                <div className="register__info div2">
                    <span className="register__info-title">Ваш заказ</span>
                    <div className="register__info-list">
                        <p className="register-count">1х</p>
                        <p className="register-info">Наушники Apple BYZ S852I</p>
                        <p className="register-price">₸ 2 927</p>
                    </div>
                    <div className="register__info-box">
                        <span className="register__info-deliveryPrice">Доставка</span>
                        <p className="register__info-deliveryPrice">₸ 499</p>
                    </div>
                    <div className="register__info-box">
                        <span className="register__info-total">К оплате</span>
                        <p className="register__info-total">₸ 2 927</p>
                    </div>
                </div>
                <div className="register__info div3">
                    <span className="register__info-title register-dop">Способ оплаты ↓</span>
                    <div className="register__delivery-box">
                        <img src={images.visa} alt="" />
                        <span className="register__delivery-title">Счет на kaspi.kz</span>
                    </div>

                    <div className="register__delivery-box">
                        <img src={images.promo} alt="" />
                        <input placeholder='Есть промокод?' className="register-input"></input>
                    </div>

                </div>
                <div className="register__info div4">
                    <span className="register__info-title">Номер получателя</span>
                    <label className="input__box input-dop">
                        <input className='register__info-phone' placeholder='+7 ___ ___ __ __' type="phone" />
                        <img src={images.pen} alt="" />
                    </label>
                </div>
                <div className="div5">
                    <button className="register-btn">Закончить оформление</button>
                </div>
            </div>
        </div><Footer /></>
    )
}

export default Registration