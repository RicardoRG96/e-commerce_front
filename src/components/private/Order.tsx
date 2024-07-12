import { Link } from 'react-router-dom';
import { formatDates } from '../../utils';
import styles from '../../styles/private/Order.module.css';
import IMAGES from '../../images/images';

interface Props {
    orderId: number
    orderStatus: string
    orderDate: string
    orderDeliveryDate: string | null
    productImageSrc: string
}

const Order: React.FC<Props> = ({ orderId, orderStatus, orderDate, orderDeliveryDate, productImageSrc }) => {
    const deliveryStatus = orderStatus === 'Pending' ? 'Pendiente de entrega' : `Entregado el ${formatDates(orderDeliveryDate)}`;
    const productsStatus = orderStatus === 'Pending' ? 'Pendiente de entrega' : 'Entregado';

    return (
        <section className={styles.section}>
            <div className={styles.dateContainer}>
                <span>{formatDates(orderDate)}</span>
            </div>
            <div className={styles.orderContainer}>
                <div className={styles.detailsContainer}>
                    <div className={styles.orderNumberContainer}>
                        <span className={styles.orderNumber}>Pedido N° {orderId}</span>
                        <span className={styles.deliveredDate}>{deliveryStatus}.</span>
                    </div>
                    <div className={styles.orderStatusContainer}>
                        <div>
                            <img src={IMAGES[productImageSrc as keyof typeof IMAGES]} alt="product-image" />
                        </div>
                        <span>{productsStatus}</span>
                    </div>
                </div>
                <div className={styles.orderDetailBtnContainer}>
                    <div>
                        <Link to={`/myaccount/orders/${orderId}`} className={styles.link}>
                            <button>Revisar detalle</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Order;