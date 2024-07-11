import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../public/AuthContext";
import { Link } from "react-router-dom";
import { type OrdersHistoryApiResponse } from "../../types";
import Order from "./Order";
import OrdersHeader from "./OrdersHeader";
import SearchOrder from "./SearchOrder";
import styles from '../../styles/private/OrdersLayout.module.css';
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";

const OrdersLayout: React.FC = () => {
    const [orders, setOrders] = useState<OrdersHistoryApiResponse>([]);
    const [error, setError] = useState(false);
    const { userId, token } = useContext(AuthContext);
    const ordersHistoryEndpoint = `http://localhost:3000/api/myaccount/orders/${userId}`;
    const { data, err, deniedAccess } = useFetchPrivatePages(ordersHistoryEndpoint, token);

    useEffect(() => {
        if (data) {
            setOrders(data);
        }
    }, [data]);

    useEffect(() => {
        if (err) {
            setError(true);
        }
    }, [err]);

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
                Aún no has realizado compras
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
                    {orders.map(order => 
                        <Order 
                            key={order.id}
                            orderId={order.id} 
                            orderStatus={order.status}
                            orderDate={order.created_at}
                        />
                    )}
                </>
            }
        </main>
    )
}

export default OrdersLayout;