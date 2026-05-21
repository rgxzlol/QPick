import Footer from '../Footer/Footer'
import './terms.css'
import { useTranslation } from 'react-i18next'
    

const Terms = () => {
    const { t } = useTranslation()
    return (
        <><div className="terms">
            <div className="terms__box">
                <h4 className="terms__title">{t("terms.conditions")}</h4>
                <p className="terms__content">{t("terms.conditionsContent")}</p>
            </div>
            <div className="terms__box">
                <h4 className="terms__title">{t("terms.delivery")}</h4>
                <p className="terms__content">{t("terms.deliveryContent")}</p>
            </div>
            <div className="terms__box">
                <h4 className="terms__title">{t("terms.return")}</h4>
                <p className="terms__content">{t("terms.returnContent")}</p>
            </div>
        </div><Footer /></>
    )
}

export default Terms