import styles from '../../styles/private/OrderDate.module.css';

const OrderDate: React.FC = () => {
    return (
        <section className={styles.section}>
            <span>
                Fecha de la compra: 5 de julio 
            </span>
        </section>
    )
}

export default OrderDate;