import styles from '../../styles/private/CartProductDetails.module.css';
import IMAGES from '../../images/images';
import { useState } from 'react';
import { type CartProductsApiResponse } from '../../types';

const removeProductEndpoint = `http://localhost:3000/api/cart/remove-product`;
const addOneProductEndpoint = `http://localhost:3000/api/cart/add-one-to-cart`;
const subtractOneProductEndpoint = `http://localhost:3000/api/cart/subtract-one-from-cart`;

interface Props {
    currentCartProducts: CartProductsApiResponse
    cartId: number
    userId: number
    productId: number
    productName: string
    productPrice: number
    productQuantity: number
    imageSrc: string
    totalPrice: number
    handleTotalPrice: React.Dispatch<React.SetStateAction<number>>
    onRemoveProduct: (value: boolean) => void
    handleError: (value: boolean) => void
    onUpdateCartProducts: React.Dispatch<React.SetStateAction<CartProductsApiResponse>>
}

const CartProductDetails: React.FC<Props> = ({
    currentCartProducts,
    cartId,
    userId,
    productId,
    productName,
    productPrice, 
    productQuantity, 
    imageSrc, 
    totalPrice,
    handleTotalPrice,
    onRemoveProduct, 
    handleError,
    onUpdateCartProducts
}) => {

    const [cartProductQuantity, setCartProductQuantity] = useState(productQuantity);

    const handleRenderProducts = (): void => {
        const nextState = currentCartProducts.filter(ccp => ccp.cart_id !== cartId);
        onUpdateCartProducts(nextState);
    }

    const handleIncreaseProductQuantity = async () => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, product_id: productId })
            };
            const response = await fetch(addOneProductEndpoint, requestOptions);

            if (response.status === 201) {
                handleError(false);
                setCartProductQuantity(cartProductQuantity + 1);
                handleTotalPrice(totalPrice += parseFloat(productPrice.toString()));
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

    const handleDecreaseProductQuantity = async () => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: userId, product_id: productId })
            };
            const response = await fetch(subtractOneProductEndpoint, requestOptions);

            if (response.status === 201) {
                handleError(false);
                setCartProductQuantity(cartProductQuantity - 1);
                handleTotalPrice(totalPrice -= productPrice);
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
                body: JSON.stringify({ user_id: userId, product_id: productId })
            };
            const response = await fetch(removeProductEndpoint, requestOptions);

            if (response.status === 204) {
                onRemoveProduct(true);
                handleRenderProducts();
                handleError(false);
                handleTotalPrice(totalPrice -= productPrice)
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
                <span className={styles.productName}>{productName}</span>
                <span className={styles.productPrice}>{productPrice}</span>
            </div>
            <div className={styles.productContainer}>
                <div className={styles.imgContainer}>
                    <img src={IMAGES[imageSrc as keyof typeof IMAGES]} alt="product-image" />
                </div>
                <div className={styles.quantityContainer}>
                    <span>Cantidad</span>   
                    <div className={styles.addToCartContainer}>
                        <div className={styles.btnContainer}>
                            <button
                                onClick={() => {
                                    cartProductQuantity > 1
                                        ? handleDecreaseProductQuantity()
                                        : handleRemoveProduct()
                                }}
                            >
                                -
                            </button>
                        </div>
                        <div className={styles.quantity}>{cartProductQuantity}</div>
                        <div className={styles.btnContainer}>
                            <button
                                onClick={() => {
                                    handleIncreaseProductQuantity()
                                }}
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