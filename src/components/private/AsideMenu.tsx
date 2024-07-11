import { useContext, useState } from 'react';
import { AuthContext } from '../public/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../../styles/private/AsideMenu.module.css';

const AsideMenu: React.FC = () => {
    const [isLoggingOut, setIsLoginggout] = useState(false);
    const { setToken, setUserId, setUserName } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        setToken(null);
        localStorage.removeItem('userId');
        setUserId(null);
        localStorage.setItem('userName', 'Inicia sesión o regístrate');
        setUserName('Inicia sesión o regístrate');
        setIsLoginggout(true);
    }

    let successModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span>Cerrando sesión...</span>
            </div>
        </section>
    );

    return (
        <>
            {isLoggingOut && successModalContent}
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
                        <button
                            onClick={() => {
                                handleLogout();
                                setTimeout(() => {
                                    navigate('/', { replace: true })
                                }, 1500);
                            }}
                        >
                            <i className="fa-solid fa-power-off"></i>
                            <span>Cerrar sesión</span>
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AsideMenu;