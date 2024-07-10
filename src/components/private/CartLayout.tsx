import { useEffect, useState } from "react";
import useFetch from '../../hooks/useFetch';
import { type CartProductsApiResponse } from "../../types";
import CartDetails from "./CartDetails";
import CartProductDetails from "./CartProductDetails";
import PaymentDetails from "./PaymentDetails";
import PaymentOptions from "./PaymentOptions";
import styles from '../../styles/private/CartLayout.module.css';

const userId = 5;
const cartProductsEndpoint = `http://localhost:3000/api/cart/${userId}`;

const CartLayout: React.FC = () => {
    const [hasProductsRemove, setHasProductsRemove] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const [cartProducts, setCartProducts] = useState<CartProductsApiResponse>([]);
    const [purchaseTotalPrice, setPurchaseTotalPrice] = useState(0);
    const { data, err } = useFetch(cartProductsEndpoint);

    const totalProdcuts = cartProducts.length;
    
    const calculateTotalPrice = (): void => {
        let totalPrice = 0;        
        cartProducts.forEach(cp => totalPrice += parseFloat(cp.product_price.toString()) * cp.quantity);
        setPurchaseTotalPrice(totalPrice);
    }
    
    useEffect(() => {
        if (data) {
            setCartProducts(data);
        }
    }, [data]);

    useEffect(() => {
        if (err) {
            setError(true);
        }
    }, [err]);

    useEffect(() => {
        if (cartProducts.length) {
            calculateTotalPrice();
        }
    }, [cartProducts])

    const handleRemoveProducts = (value: boolean) => setHasProductsRemove(value);
    const handleError = (value: boolean) => setError(value);

    let successModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => handleRemoveProducts(false)}
                    >
                        x
                    </button>
                </div>
                <span>¡Producto(s) eliminados!</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.keepBuyingBtnContainer}>
                        <button 
                            onClick={() => {
                                handleRemoveProducts(false);

                            }}
                        >
                            Seguir comprando
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => {
                            handleRemoveProducts(false);
                            handleError(false);
                        }}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, inténtalo nuevamente</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <button 
                            onClick={() => {
                                handleRemoveProducts(false);
                                handleError(false);
                            }}
                            >
                            Intentar nuevamente
                        </button>
                    </div>
                    <div className={styles.goToCartBtnContainer}>
                    </div>
                </div>
            </div>
        </section>
    );

    let loadingContent = (
       <section className={styles.loadingContentContainer}>
            <div>
                No tienes productos en el carro.
            </div>
       </section>
    )

    return (
        <main className={styles.main}>
            {hasProductsRemove && successModalContent}
            {error && errorModalContent}
            {!cartProducts.length ? loadingContent :
                <>
                    <CartDetails
                        onUpdateCartProducts={setCartProducts}
                        totalProducts={totalProdcuts}
                        onEmptyingTheCart={handleRemoveProducts} 
                        handleError={handleError} 
                    />
                    <section className={styles.productDetailsContainer}>
                        {cartProducts.map(cp => 
                            <CartProductDetails
                                key={cp.cart_id}
                                currentCartProducts={cartProducts}
                                cartId={cp.cart_id}
                                userId={cp.user_id}
                                productId={cp.product_id}
                                productName={cp.product_name}
                                productPrice={cp.product_price}
                                productQuantity={cp.quantity}
                                imageSrc={cp.product_image_src}
                                totalPrice={purchaseTotalPrice}
                                handleTotalPrice={setPurchaseTotalPrice}
                                onRemoveProduct={handleRemoveProducts}
                                handleError={handleError}
                                onUpdateCartProducts={setCartProducts}
                            />
                        )}
                    </section>
                    <section className={styles.paymentcontainer}>
                        <PaymentDetails totalPrice={purchaseTotalPrice} />
                        <PaymentOptions />
                    </section>
                </>
            }
        </main>
    )
}

export default CartLayout;