import styles from '../../styles/private/PaymentOptions.module.css';
import IMAGES from "../../images/images";

const PaymentOptions: React.FC = () => {
    return (
        <article className={styles.container}>
            <div>
                <span>Medios de pago disponibles</span>
            </div>
            <div className={styles.imgContainer}>
                <img src={IMAGES.paymentOptions} alt='payment-options' />
            </div>
        </article>
    )
}

export default PaymentOptions;