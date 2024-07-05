import styles from '../../styles/public/ProductDetails.module.css';

interface Props {
    brand: string
    productName: string
    price: number
    description: string
}

const ProductDetails: React.FC<Props> = ({ brand, productName, price, description }) => {
    return (
        <article className={styles.detailsContainer}>
            <div className={styles.productDetails}>
                <span id={styles.brand}>{brand}</span>
                <span id={styles.name}>{productName}</span>
            </div>
            <div className={styles.description}>
                <p> 
                    {description}
                </p>
            </div>
            <div className={styles.price}>
                <span>{`$${price}`}</span>
            </div>
            <div>
                <div className={styles.btnContainer}>
                    <button className={styles.cartBtn}>Agregar al carro</button>
                    <button className={styles.buyBtn}>Comprar ahora</button>
                </div>
            </div>
        </article>
    )
}

export default ProductDetails;