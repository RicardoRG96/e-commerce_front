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
    const { data, err } = useFetch(cartProductsEndpoint);

    useEffect(() => {
        if (data) {
            console.log(data);
            setCartProducts(data)
        }
    }, [data]);

    useEffect(() => {
        if (err) {
            console.log(err);
            setError(true);
        }
    }, [err]);

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
                            onClick={() => handleRemoveProducts(false)}
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

    return (
        <main className={styles.main}>
            {hasProductsRemove && successModalContent}
            {error && errorModalContent}
            <CartDetails 
                onEmptyingTheCart={handleRemoveProducts} 
                handleError={handleError} 
            />
            <section className={styles.productDetailsContainer}>
                <CartProductDetails
                    onRemoveProduct={handleRemoveProducts}
                    handleError={handleError} 
                />
            </section>
            <section className={styles.paymentcontainer}>
                <PaymentDetails />
                <PaymentOptions />
            </section>
        </main>
    )
}

export default CartLayout;