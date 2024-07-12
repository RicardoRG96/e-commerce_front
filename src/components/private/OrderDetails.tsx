import { formatDates } from '../../utils';
import styles from '../../styles/private/OrderDetails.module.css';
import IMAGES from '../../images/images';

interface Props {
    productName: string
    productQuantity: number
    productPrice: number
    productDescription: string
    productImageSrc: string
    deliveryDate: string
}

const OrderDetails: React.FC<Props> = ({ 
    productName,
    productQuantity,
    productPrice,
    productDescription,
    productImageSrc,
    deliveryDate
}) => {
    const deliveryDatecontent = deliveryDate ? `Entregado el ${formatDates(deliveryDate)}.` : 'Pendiente de entrega';

    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <span>{`${deliveryDatecontent}.`}</span>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.productDetailsContainer}>
                    <div className={styles.imageContainer}>
                        <img src={IMAGES[productImageSrc as keyof typeof IMAGES]} alt="product-image" />
                    </div>
                    <div className={styles.productInfoContainer}>
                        <div className={styles.productNameContainer}>
                            <span>{productName}</span>
                        </div>
                        <div className={styles.quantityPriceContainer}>
                            <span className={styles.quantity}>{`${productQuantity} un.`}</span>
                            <span className={styles.price}>{`$${productPrice}`}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <span>Descripción de producto</span>
                    <div>
                        <p>{productDescription}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderDetails;