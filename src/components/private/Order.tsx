import styles from '../../styles/private/Order.module.css';
import IMAGES from '../../images/images';
import { Link } from 'react-router-dom';

const Order: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.dateContainer}>
                <span>07 de julio</span>
            </div>
            <div className={styles.orderContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.orderNumberContainer}>
                        <span className={styles.orderNumber}>Pedido N° 1204081991</span>
                        <span className={styles.deliveredDate}>Entregado el 10 de Mayo.</span>
                    </div>
                    <div className={styles.orderStatusContainer}>
                        <div>
                            <img src={IMAGES.iphone15} alt="product-image" />
                        </div>
                        <span>Entregado</span>
                    </div>
                </div>
                <div className={styles.orderDetailBtnContainer}>
                    <div>
                        <Link to={'/myaccount/orders/details'} className={styles.link}>
                            <button>Revisar detalle</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order;