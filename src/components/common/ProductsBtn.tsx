import styles from '../../styles/common/ProductsBtn.module.css';

const ProductsBtn: React.FC = () => {
    return (
        <div className={styles.container}>
            <button 
                className={styles.btn}
            >
                <span>Productos</span>
            </button>
        </div>
    )
}

export default ProductsBtn;