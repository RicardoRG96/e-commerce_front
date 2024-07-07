import { Link } from 'react-router-dom';
import styles from '../../styles/private/AsideMenu.module.css';

const AsideMenu: React.FC = () => {
    return (
        <section className={styles.section}>
            <div className={styles.optionContainer}>
                <div className={styles.option}>
                    <Link to={'/myaccount'} className={styles.link}>
                        <button>
                            <i className="fa-regular fa-user"></i>
                            <span>Datos Personales</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.optionContainer}>
                <div className={styles.option}>
                    <Link to={'/myaccount/account-settings'} className={styles.link}>
                        <button>
                            <i className="fa-solid fa-key"></i>
                            <span>Configurar mi cuenta</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.optionContainer}>
                <div className={styles.option}>
                    <Link to={'/myaccount/orders'} className={styles.link}>
                        <button>
                            <i className="fa-solid fa-bag-shopping"></i>
                            <span>Mis compras</span>
                        </button>
                    </Link>
                </div>
            </div>
            <div className={styles.optionContainer}>
                <div className={styles.option}>
                    <button>
                        <i className="fa-solid fa-power-off"></i>
                        <span>Cerrar sesión</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default AsideMenu;