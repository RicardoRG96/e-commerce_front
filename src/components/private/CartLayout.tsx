import CartDetails from "./CartDetails";
import CartProductDetails from "./CartProductDetails";
import PaymentDetails from "./PaymentDetails";
import PaymentOptions from "./PaymentOptions";
import styles from '../../styles/private/CartLayout.module.css';

const CartLayout: React.FC = () => {
    return (
        <main className={styles.main}>
            <CartDetails />
            <section className={styles.productDetailsContainer}>
                <CartProductDetails />
            </section>
            <section className={styles.paymentcontainer}>
                <PaymentDetails />
                <PaymentOptions />
            </section>
        </main>
    )
}

export default CartLayout;