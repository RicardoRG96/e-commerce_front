import styles from '../../styles/public/Product.module.css';
import IMAGES from '../../images/images';

const Product: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.productContainer}>
                <img src={IMAGES.iphone15} alt="product-image" />
                <span className={styles.brand}>Apple</span>
                <span>iPhone 15 pro</span>
                <span className={styles.price}>$1.000.000</span>
            </div>
            <div className={styles.productContainer}>
                <img src={IMAGES.playstation5} alt="product-image" />
                <span className={styles.brand}>Sony</span>
                <span>Playstation 5</span>
                <span className={styles.price}>600.000</span>
            </div>
            <div className={styles.productContainer}>
                <img src={IMAGES.iphone15} alt="product-image" />
                <span className={styles.brand}>Apple</span>
                <span>iPhone 15 pro</span>
                <span className={styles.price}>$1.000.000</span>
            </div>
            <div className={styles.productContainer}>
                <img src={IMAGES.playstation5} alt="product-image" />
                <span className={styles.brand}>Sony</span>
                <span>Playstation 5</span>
                <span className={styles.price}>600.000</span>
            </div>   
        </section>
    )
}

export default Product;