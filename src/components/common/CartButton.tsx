import styles from '../../styles/common/CartButton.module.css';

const CartButton: React.FC = () => {
    return (
        <div className={styles.container}>
            <button className={styles.btn}>
                <i
                    style={
                        {
                            fontSize: '22px', 
                            color: '#EEEEEE'
                        }
                    } 
                    className="fa-solid fa-cart-shopping">  
                </i>
                <span>Carro</span>
            </button>
        </div>
    )
}

export default CartButton;