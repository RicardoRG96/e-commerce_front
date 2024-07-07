import styles from '../../styles/private/OrderDetails.module.css';
import IMAGES from '../../images/images';

const OrderDetails: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.titleContainer}>
                <span>Entregado el 5 de Julio.</span>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.productDetailsContainer}>
                    <div className={styles.imageContainer}>
                        <img src={IMAGES.iphone15} alt="product-image" />
                    </div>
                    <div className={styles.productInfoContainer}>
                        <div className={styles.productNameContainer}>
                            <span>iPhone 15</span>
                        </div>
                        <div className={styles.quantityPriceContainer}>
                            <span className={styles.quantity}>1 un.</span>
                            <span className={styles.price}>$1.000.000</span>
                        </div>
                    </div>
                </div>
                <div className={styles.descriptionContainer}>
                    <span>Descripción de producto</span>
                    <div>
                        <p>
                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OrderDetails;