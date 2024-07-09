import { Link } from "react-router-dom";
import styles from '../../styles/common/Modal.module.css';

interface Props {
    onAddToCart: (value: boolean) => void
}

const Modal: React.FC<Props> = ({ onAddToCart }) => {
    return (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button onClick={() => onAddToCart(false)}>x</button>
                </div>
                <span>¡Producto añadido con éxito!</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.keepBuyingBtnContainer}>
                        <button onClick={() => onAddToCart(false)}>Seguir comprando</button>
                    </div>
                    <div className={styles.goToCartBtnContainer}>
                        <Link to={'/cart'} className={styles.link}>
                            <button>Ir al carro</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Modal;