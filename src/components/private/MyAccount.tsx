import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../public/AuthContext";
import { Link } from "react-router-dom";
import { type UserDataApiResponse } from "../../types";
import MyAccountLayout from "./MyAccountLayout";
import PersonalInfo from "./PersonalInfo";
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";
import styles from '../../styles/private/MyAccount.module.css';

const MyAccount: React.FC = () => {
    const [userData, setUserData] = useState<UserDataApiResponse>([]);
    const [error, setError] = useState(false);
    const { userId, token, setUserId, setToken, setUserName } = useContext(AuthContext);
    const accountInfoEndpoint = `http://localhost:3000/api/myaccount/${userId}`;
    const { data, err, deniedAccess } = useFetchPrivatePages(accountInfoEndpoint, token);

    useEffect(() => {
        if (data) {
            setUserData(data);
        }
    });

    useEffect(() => {
        if (err) {
            setError(true);
        }
    }, [err]);

    useEffect(() => {
        if (deniedAccess) {
            localStorage.setItem('userName', 'Inicia sesión o regístrate');
            setUserName('Inicia sesión o regístrate');
            localStorage.removeItem('token');
            setToken(null);
            localStorage.removeItem('userId');
            setUserId(null);
        }
    }, [deniedAccess]);

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

    let loadingContent = (
        <section className={styles.loadingContentContainer}>
             <div>
                Cargando...
             </div>
        </section>
    )

    return (
        <>   
            {error && errorModalContent}
            {deniedAccess && modalNotLoginErrorMessage}
            {!userData.length 
                ? loadingContent
                : <MyAccountLayout children={<PersonalInfo userName={userData[0].name} userEmail={userData[0].email} />}/>
            }
        </>
    )
}

export default MyAccount;