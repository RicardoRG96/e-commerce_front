import styles from '../../styles/private/OrderNumber.module.css';

interface Props {
    orderNumber: number
}

const OrderNumber: React.FC<Props> = ({ orderNumber }) => {
    return (
        <>
            <span className={styles.span}>
                {`Pedido N° ${orderNumber}`}
            </span>
        </>
    )
}

export default OrderNumber;