import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../public/AuthContext";
import { Link, useParams } from "react-router-dom";
import { type OrdersHistoryApiResponse } from "../../types";
import Order from "./Order";
import OrdersHeader from "./OrdersHeader";
import SearchOrder from "./SearchOrder";
import styles from '../../styles/private/OrdersLayout.module.css';
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";

const SearchedOrder: React.FC = () => {
    const [orders, setOrders] = useState<OrdersHistoryApiResponse>([]);
    const [error, setError] = useState(false);
    const { orderId } = useParams();
    const { userId, token, setUserId, setToken, setUserName } = useContext(AuthContext);
    const params = new URLSearchParams({
        userId: userId 
    })
    const ordersHistoryEndpoint = `http://localhost:3000/api/myaccount/orders/search/${orderId}?${params}`;
    const { data, err, deniedAccess } = useFetchPrivatePages(ordersHistoryEndpoint, token);

    useEffect(() => {
        if (data) {
            const uniqueOrders = (data as OrdersHistoryApiResponse).filter((order, i, self) => {
                return i === self.findIndex((t) => t.order_id === order.order_id)
            })
            setOrders(uniqueOrders);
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

    let modalNotLoginErrorMessage = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span>Debes iniciar sesión para acceder a esta página</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <Link to={'/login'}>
                            <button 
                                onClick={() => setError(false)}
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
                No hemos encontrado compras
            </div>
       </section>
    )

    return(
        <main className={styles.main}>
            {error && errorModalContent}
            {deniedAccess && modalNotLoginErrorMessage}
            {!orders.length
                ? loadingContent
                : 
                <>
                    <OrdersHeader />
                    <SearchOrder />
                    <section className={styles.ordersContainer}>
                        {orders.map(order => 
                            <Order 
                                key={order.order_id}
                                orderId={order.order_id} 
                                orderStatus={order.order_status}
                                orderDate={order.order_date}
                                orderDeliveryDate={order.order_delivery_date}
                                productImageSrc={order.product_image_src}
                            />
                        )}
                    </section>
                </>
            }
        </main>
    )
}

export default SearchedOrder;