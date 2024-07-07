import OrderDate from "./OrderDate";
import OrderNumber from "./OrderNumber";
import OrderDetails from "./OrderDetails";
import styles from '../../styles/private/OrderDetailsLayout.module.css';

const OrderDetailsLayout: React.FC = () => {
    return (
        <main className={styles.main}>
            <OrderDate />
            <OrderNumber />
            <OrderDetails />
        </main>
    )
}

export default OrderDetailsLayout;