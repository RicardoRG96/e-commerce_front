import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../public/AuthContext";
import { Link } from "react-router-dom";
import useFetchPrivatePages from "../../hooks/useFetchPrivatePages";
import MyAccountLayout from "./MyAccountLayout";
import styles from '../../styles/private/AccountSettings.module.css';

const updatePasswordEndpoint = 'http://localhost:3000/api/myaccount/update-password';

const AccountSettings: React.FC = () => {
    const [successUpdate, setSuccessUpdate] = useState(false);
    const [error, setError] = useState(false);
    const { userId, token, setToken, setUserId, setUserName } = useContext(AuthContext);
    const [userInputValues, setUserInputValues] = useState({
        userId: userId,
        currentPassword: '',
        newPassword: ''
    });
    const accountInfoEndpoint = `http://localhost:3000/api/myaccount/${userId}`;
    const { err, deniedAccess } = useFetchPrivatePages(accountInfoEndpoint, token);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserInputValues({
            ...userInputValues,
            [evt.target.name]: evt.target.value
        });
    }

    const handleSubmit = async () => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  token 
                },
                body: JSON.stringify({ 
                    userId, 
                    currentPassword: userInputValues.currentPassword, 
                    newPassword: userInputValues.newPassword 
                })
            }
            const response = await fetch(updatePasswordEndpoint, requestOptions);

            if (response.status === 200) {
                setError(false);
                setSuccessUpdate(true);
            }
            if (response.status === 400 ||
                response.status === 401 ||
                response.status === 403 ||
                response.status === 404 ||
                response.status === 500 
            ) {
                setError(true);
                setSuccessUpdate(false);
            }
        } catch (err) {
            setError(true);
            setSuccessUpdate(false);
        }
    }

    useEffect(() => {
        if (err) {
            setError(true);
        }
    });

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

    let successModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => setSuccessUpdate(false)}
                    >
                        x
                    </button>
                </div>
                <span>Datos actualizados con éxito!</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.keepBuyingBtnContainer}>
                        <button 
                            onClick={() => setSuccessUpdate(false)}
                        >
                            Seguir editando información
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );

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

    let childrenContent = (
        <section className={styles.container}>
            <div className={styles.title}>Configurar mi cuenta</div>
            <div className={styles.formContainer}>
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit();
                }}>
                    <label>Contraseña actual</label>
                    <input onChange={(evt) => handleChange(evt)} 
                        type="password" name="currentPassword" />
                    <label>Nueva contraseña</label>
                    <input onChange={(evt) => handleChange(evt)} 
                        type="password" name="newPassword" />
                    <button>Cambiar contraseña</button>
                </form>
            </div>
        </section>
    )

    return (
        <>
            {error && errorModalContent}
            {deniedAccess && modalNotLoginErrorMessage}
            {successUpdate && successModalContent}
            <MyAccountLayout children={childrenContent} />
        </>
    )
}

export default AccountSettings;