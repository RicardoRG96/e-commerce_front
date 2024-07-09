import styles from '../../styles/private/CartDetails.module.css';

const API = `http://localhost:3000/api/cart/empty-the-cart`;

interface Props {
    onEmptyingTheCart: (value: boolean) => void
    handleError: (value: boolean) => void
}

const CartDetails: React.FC<Props> = ( {onEmptyingTheCart, handleError}) => {

    const handleClick = async () => {
        try {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: 5 })
            };
            const response = await fetch(API, requestOptions);

            if (response.status === 20) {
                onEmptyingTheCart(true);
                handleError(false);
            }
            if (response.status === 400 || 
                response.status === 500 || 
                response.status === 404
            ) {
                onEmptyingTheCart(false);
                handleError(true);
            }
        } catch (err) {
            onEmptyingTheCart(false);
            handleError(true);
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.detailsContainer}>
                <span className={styles.detailsTitle}>Tu carro</span>
                <span className={styles.productsNumber}>(2 productos)</span>
            </div>
            <div className={styles.deleteBtnContainer}>
                <button
                    onClick={handleClick} 
                >
                    Vaciar Carro
                </button>
            </div>
        </div>
    )
}

export default CartDetails;