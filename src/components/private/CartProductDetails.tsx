import styles from '../../styles/private/CartProductDetails.module.css';
import IMAGES from '../../images/images';

const removeProductEndpoint = `http://localhost:3000/api/cart/remove-product`;
const addOneProductEndpoint = `http://localhost:3000/api/cart/add-one-to-cart`;
const subtractOneProductEndpoint = `http://localhost:3000/api/cart/subtract-one-from-cart`;

interface Props {
    onRemoveProduct: (value: boolean) => void
    handleError: (value: boolean) => void
}

const CartProductDetails: React.FC<Props> = ({ onRemoveProduct, handleError }) => {

    const handleProductQuantity = async (endpoint: string) => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: 5, product_id: 1 })
            };
            const response = await fetch(endpoint, requestOptions);

            if (response.status === 201) {
                onRemoveProduct(true);
                handleError(false);
            }
            if (response.status === 400 || 
                response.status === 500 || 
                response.status === 404
            ) {
                onRemoveProduct(false);
                handleError(true);
            }
        } catch (err) {
            onRemoveProduct(false);
            handleError(true);
        }
    }

    const handleRemoveProduct = async () => {
        try {
            const requestOptions = {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: 5, product_id: 1 })
            };
            const response = await fetch(removeProductEndpoint, requestOptions);

            if (response.status === 204) {
                onRemoveProduct(true);
                handleError(false);
            }
            if (response.status === 400 || 
                response.status === 500 || 
                response.status === 404
            ) {
                onRemoveProduct(false);
                handleError(true);
            }
        } catch (err) {
            onRemoveProduct(false);
            handleError(true);
        }
    }

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
                            <button
                                onClick={() => handleProductQuantity(subtractOneProductEndpoint)}
                            >
                                -
                            </button>
                        </div>
                        <div className={styles.quantity}>1</div>
                        <div className={styles.btnContainer}>
                            <button
                                onClick={() => handleProductQuantity(addOneProductEndpoint)}
                            >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.deleteBtnContainer}>
                <div>
                    <i className="fa-solid fa-trash"></i>
                    <button
                        onClick={handleRemoveProduct}
                    >
                        Eliminar
                    </button>
                </div>
            </div>
        </article>
    )
}

export default CartProductDetails;