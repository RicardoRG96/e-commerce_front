import styles from '../../styles/private/OrdersHeader.module.css';

const OrdersHeader: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <span>Mis compras</span>
            </div>
        </section>
    )
}

export default OrdersHeader;