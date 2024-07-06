import styles from '../../styles/private/CartDetails.module.css';

const CartDetails: React.FC = () => {
    return (
        <div className={styles.container}>
            <div className={styles.detailsContainer}>
                <span className={styles.detailsTitle}>Tu carro</span>
                <span className={styles.productsNumber}>(2 productos)</span>
            </div>
            <div className={styles.deleteBtnContainer}>
                <button>Vaciar Carro</button>
            </div>
        </div>
    )
}

export default CartDetails;