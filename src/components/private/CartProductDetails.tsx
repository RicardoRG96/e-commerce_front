import styles from '../../styles/private/CartProductDetails.module.css';
import IMAGES from '../../images/images';

const CartProductDetails: React.FC = () => {
    return (
        <article className={styles.container}>
            <div className={styles.productNameContainer}>
                <span className={styles.productName}>iPhone 15 Pro 128GB</span>
                <span className={styles.productPrice}>$1.000.990</span>
            </div>
            <div className={styles.productContainer}>
                <div className={styles.imgContainer}>
                    <img src={IMAGES.iphone15} alt="product-image" />
                </div>
                <div className={styles.quantityContainer}>
                    <span>Cantidad</span>
                    <div className={styles.addToCartContainer}>
                        <div className={styles.btnContainer}>
                            <button>-</button>
                        </div>
                        <div className={styles.quantity}>1</div>
                        <div className={styles.btnContainer}>
                            <button>+</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.deleteBtnContainer}>
                <div>
                    <i className="fa-solid fa-trash"></i>
                    <button>
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CartProductDetails;