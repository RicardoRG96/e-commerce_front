import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../public/AuthContext";
import { Link } from "react-router-dom";
import MyAccountLayout from "./MyAccountLayout";
import PersonalInfo from "./PersonalInfo";
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";
import styles from '../../styles/private/MyAccount.module.css';

const MyAccount: React.FC = () => {
    const [error, setError] = useState(false);
    const { userId, token } = useContext(AuthContext);
    const accountInfoEndpoint = `http://localhost:3000/api/myaccount/${userId}`;
    const { err, deniedAccess } = useFetchPrivatePages(accountInfoEndpoint, token);

    useEffect(() => {
        if (err) {
            setError(true);
        }
    }, [err]);

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, refresca la página</span>
            </div>
        </section>
    );

    let modalNotLoginErrorMessage = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <span>Debes iniciar sesión para acceder a esta página</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <Link to={'/login'}>
                            <button>
                                Ir a iniciar sesión
                            </button>
                        </Link>
                    </div>
                    <div className={styles.goToCartBtnContainer}>
                    </div>
                </div>
            </div>
        </section>
    );

    return (
        <>   
            {error && errorModalContent}
            {deniedAccess && modalNotLoginErrorMessage}
            <MyAccountLayout children={<PersonalInfo />}/>
        </>
    )
}

export default MyAccount;