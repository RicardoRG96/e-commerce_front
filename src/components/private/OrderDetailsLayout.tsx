import { useParams, Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../public/AuthContext";
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";
import { type OrderDetailsApiResponse } from "../../types";
import OrderDate from "./OrderDate";
import OrderNumber from "./OrderNumber";
import OrderDetails from "./OrderDetails";
import styles from '../../styles/private/OrderDetailsLayout.module.css';

const OrderDetailsLayout: React.FC = () => {
    const [orderDetails, setOrderDetails] = useState<OrderDetailsApiResponse>([]);
    const [error, setError] = useState(false);
    const { userId, token, setToken, setUserId, setUserName } = useContext(AuthContext);
    const { orderId } = useParams();
    const params = new URLSearchParams({
        user_id: userId.toString(),
        order_id: orderId as string
    });
    const orderDetailsEndpoint = `http://localhost:3000/api/myaccount/orders/details?${params}`;
    const { data, err, deniedAccess } = useFetchPrivatePages(orderDetailsEndpoint, token);

    useEffect(() => {
        if (data) {
            setOrderDetails(data);
            console.log(data);
        }
    });

    useEffect(() => {
        if (err) {
            setError(true);
        }
    });

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

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, refresca la página</span>
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
                            <button>
                                Ir a iniciar sesión
                            </button>
                        </Link>
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
                Cargando...
             </div>
        </section>
    )

    return (
        <main className={styles.main}>
            {error && errorModalContent}
            {deniedAccess && modalNotLoginErrorMessage}
            {!orderDetails.length
                ? loadingContent
                : 
                    <section className={styles.productsContainer}>
                        {orderDetails.map(order => 
                            <section>
                                <div className={styles.orderInfoContainer}>
                                    <div className={styles.orderDateContainer}>
                                        <OrderDate orderDate={order.order_date} />
                                    </div>
                                    <div className={styles.orderNumberContainer}>
                                        <OrderNumber orderNumber={order.order_id} />
                                    </div>
                                </div>
                                <OrderDetails
                                    productName={order.product_name}
                                    productQuantity={order.quantity}
                                    productPrice={order.product_price}
                                    productDescription={order.product_description}
                                    productImageSrc={order.product_image_src}
                                    deliveryDate={order.order_delivery_date} 
                                />
                            </section>
                        )}
                    </section>
            }
        </main>
    )
}

export default OrderDetailsLayout;