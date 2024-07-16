import { useNavigate } from 'react-router-dom';
import styles from '../../styles/private/SuccessPayment.module.css';

const SuccessPayment: React.FC = () => {
    const navigate = useNavigate();

    return (
        <main className={styles.main}>
            <section className={styles.section}>
                <div className={styles.exitBtnContainer}>
                    <button
                        onClick={() => navigate('/')}
                    >
                        x
                    </button>
                </div>
                <div className={styles.messageContainer}>
                    ¡Tu compra se ha realizado con éxito!
                </div>
                <div className={styles.redirectsBtnsContainer}>
                    <button onClick={() => navigate('/myaccount/orders')}>
                        <span>Ir a mis compras</span>
                    </button>
                    <button onClick={() => navigate('/categories')}>
                        <span>Seguir Comprando</span>
                    </button>
                </div>
            </section>
        </main>
    )
}

export default SuccessPayment;