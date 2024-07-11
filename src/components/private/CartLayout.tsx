import { useEffect, useState, useContext } from "react";
import { AuthContext } from "../public/AuthContext";
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";
import { type CartProductsApiResponse } from "../../types";
import CartDetails from "./CartDetails";
import CartProductDetails from "./CartProductDetails";
import PaymentDetails from "./PaymentDetails";
import PaymentOptions from "./PaymentOptions";
import styles from '../../styles/private/CartLayout.module.css';
import { Link } from "react-router-dom";

const CartLayout: React.FC = () => {
    const [hasProductsRemove, setHasProductsRemove] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const [cartProducts, setCartProducts] = useState<CartProductsApiResponse>([]);
    const [purchaseTotalPrice, setPurchaseTotalPrice] = useState(0);
    const { token, userId, setToken, setUserId, setUserName } = useContext(AuthContext);
    const cartProductsEndpoint = `http://localhost:3000/api/cart/${userId}`;
    const { data, err, deniedAccess } = useFetchPrivatePages(cartProductsEndpoint, token);

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
        if (deniedAccess) {
            localStorage.setItem('userName', 'Inicia sesión o regístrate');
            setUserName('Inicia sesión o regístrate');
            localStorage.removeItem('token');
            setToken(null);
            localStorage.removeItem('userId');
            setUserId(null);
        }
    }, [deniedAccess]);

    useEffect(() => {
        if (cartProducts.length) {
            calculateTotalPrice();
        }
    }, [cartProducts]);

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

    let modalNotLoginErrorMessage = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span>Debes iniciar sesión para acceder a esta página</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <Link to={'/login'}>
                            <button 
                                onClick={() => {
                                    handleRemoveProducts(false);
                                    handleError(false);
                                }}
                                >
                                Ir a iniciar sesión
                            </button>
                        </Link>
                    </div>
                    <div className={styles.goToCartBtnContainer}>
                    </div>
                </div>
            </div>
        </section>
    )

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
            {deniedAccess && modalNotLoginErrorMessage}
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