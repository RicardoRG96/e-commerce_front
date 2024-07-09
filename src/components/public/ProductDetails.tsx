import styles from '../../styles/public/ProductDetails.module.css';

interface Props {
    brand: string
    productName: string
    price: number
    description: string
    onAddToCart: (value: boolean) => void
    handleError: (value: boolean) => void
}

const API = `http://localhost:3000/api/cart/add-to-cart`;

const ProductDetails: React.FC<Props> = ({ 
    brand, 
    productName, 
    price, 
    description, 
    onAddToCart,
    handleError 
}) => {

    const handleClick = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: 5, product_id: 1, quantity: 1 })
            };
            const response = await fetch(API, requestOptions);

            if (response.status === 201) {
                onAddToCart(true);
                handleError(false);
            }
            if (response.status === 400 || response.status === 500) {
                onAddToCart(false);
                handleError(true);
            }
        } catch (err) {
            onAddToCart(false);
            handleError(true);
        }
    }

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
                    <button 
                        className={styles.cartBtn}
                        onClick={handleClick}
                    >
                        Agregar al carro
                    </button>
                    <button className={styles.buyBtn}>Comprar ahora</button>
                </div>
            </div>
        </article>
    )
}

export default ProductDetails;