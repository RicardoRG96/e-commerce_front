import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../public/AuthContext';
import { type CartProductsApiResponse } from '../../types';
import styles from '../../styles/private/PaymentDetails.module.css';

interface Props {
    totalPrice: number
    products: CartProductsApiResponse
}

const paymentEndpoint = 'http://localhost:3000/api/payment/create-checkout-session';

const PaymentDetails: React.FC<Props> = ({ totalPrice, products}) => {
    const [error, setError] = useState(false);
    const { userId, token } = useContext(AuthContext);
    const productsNames = products.map(product => product.product_name).join(', ');

    const handleClick = async () => {
        try {
            const formatTotalPrice = parseFloat(totalPrice.toFixed(2)) * 100
            const requestOptions = {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  token 
                },
                body: JSON.stringify({ userId: userId, products: productsNames, total: formatTotalPrice })
            };
            const response = await fetch(paymentEndpoint, requestOptions);
            const result = await response.json();

            if (response.status === 200) {
                setError(false);
                location.href = result.url;
            }
            if (response.status === 400 || 
                response.status === 401 || 
                response.status === 404 ||
                response.status === 500
            ) {
                setError(true);
            }
        } catch (err) {
            setError(true);
        }
    }

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => setError(false)}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, inténtalo nuevamente</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <button 
                            onClick={() => setError(false)}
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
        <>
            {error && errorModalContent}
            <article className={styles.container}>  
                <div className={styles.resumeContainer}>
                    <span>Resumen de compra</span>
                </div>
                <div className={styles.priceDetailsContainer}>
                    <span>Costo de tus productos: </span>
                    <span>{`$${totalPrice.toFixed(2)}`}</span>
                </div>
                <div className={styles.payBtnContainer}>
                    <button onClick={handleClick}>Continuar con el pago</button>
                </div>
                <div className={styles.safePaymentContainer}>
                    <i className="fa-solid fa-lock"></i>
                    <span>Pagar es 100% seguro</span>
                </div>
            </article>
        </>
    )
}

export default PaymentDetails;