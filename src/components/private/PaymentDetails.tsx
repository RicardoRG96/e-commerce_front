import styles from '../../styles/private/PaymentDetails.module.css';

const PaymentDetails: React.FC = () => {
    return (
        <article className={styles.container}>
            <div className={styles.resumeContainer}>
                <span>Resumen de compra</span>
            </div>
            <div className={styles.priceDetailsContainer}>
                <span>Costo de tus productos</span>
                <span>$1.000.000</span>
            </div>
            <div className={styles.payBtnContainer}>
                <button>Continuar con el pago</button>
            </div>
            <div className={styles.safePaymentContainer}>
                <i className="fa-solid fa-lock"></i>
                <span>Pagar es 100% seguro</span>
            </div>
        </article>
    )
}

export default PaymentDetails;