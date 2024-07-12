import styles from '../../styles/private/OrderDate.module.css';
import { formatDates } from '../../utils';

interface Props {
    orderDate: string
}

const OrderDate: React.FC<Props> = ({ orderDate }) => {
    return (
        <>
            <span className={styles.span}>
                {`Fecha de la compra: ${formatDates(orderDate)}`} 
            </span>
        </>        
    )
}

export default OrderDate;