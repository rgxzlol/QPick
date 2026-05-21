import images from "../../data/images"
import Footer from "../Footer/Footer"
import './contacts.css'

const Contacts = () => {
    return (
        <><div className="contacts">
            <div className="contacts__box">
                <div className="contacts__geo-box">
                    <h5 className="contacts">Наш офис</h5>
                    <iframe className="contacts-geo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d745.6135191967844!2d76.8261876758054!3d43.2333391416845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369df5639b2e7%3A0x72569966113f4d7d!2z0LzQuNC60YDQvtGA0LDQudC-0L0g0JDQutGB0LDQuS0z0JAgNjLQsCwg0JDQu9C80LDRgtGLLCDQmtCw0LfQsNGF0YHRgtCw0L0!5e0!3m2!1sru!2s!4v1779356148575!5m2!1sru!2s" width="722" height="424" loading="lazy"></iframe>
                    <div className="contacts__box-geo">
                        <img src={images.geo} alt="Geo" />
                        <div className="contacts__geo__box-little">
                            <span className="contacts__geo">Аксай-3а, 62ф, Алматы, Казахстан</span>
                            <span className="contacts__geo-little">3 этаж 35 кабинет</span>
                        </div>
                    </div>
                </div>
                <div className="contacts__socials">
                    <a href="https://whatsapp.com" className="contacts__socials-marker">
                        <img src={images.wa} alt="Whatsapp" />
                    </a>
                    <a href="https://www.vk.com" className="contacts__socials-marker">
                        <img src={images.vk} alt="VK" />
                    </a>
                    <a href="https://www.instagram.com" className="contacts__socials-marker">
                        <img src={images.insta} alt="Instagram" />
                    </a>
                    <a href="https://telegram.org" className="contacts__socials-marker">
                        <img src={images.tg} alt="Telegram" />
                    </a>
                </div>
            </div>
            <div className="contacts__phone-box">
                <img src={images.phoneMark} alt="Phone Mark" />
                <p className="socials__phone">+7 727 123 45 67</p>
            </div>
        </div><Footer /></>
    )
}

export default Contacts