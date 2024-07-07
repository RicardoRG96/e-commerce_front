import Order from "./Order";
import OrdersHeader from "./OrdersHeader";
import SearchOrder from "./SearchOrder";
import styles from '../../styles/private/OrdersLayout.module.css';

const OrdersLayout: React.FC = () => {
    return(
        <main className={styles.main}>
            <OrdersHeader />
            <SearchOrder />
            <Order />
        </main>
    )
}

export default OrdersLayout;