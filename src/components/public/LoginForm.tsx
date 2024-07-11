import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContext';
import styles from '../../styles/public/LoginForm.module.css';

const loginEndpoint = 'http://localhost:3000/login';

const LoginForm: React.FC = () => {
    const [userInputValues, setUserInputValues] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);
    const [showSuccessfulLoginMessage, setShowSuccessfulLoginMessage] = useState(false);
    const { setToken, setUserId, setUserName } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleError = (value: boolean) => setError(value);
    const handleSuccessfulMessage = (value: boolean) => setShowSuccessfulLoginMessage(value);
    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserInputValues({
            ...userInputValues,
            [evt.target.name]: evt.target.value
        });
    }

    const handleSubmitData = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: userInputValues.email, password: userInputValues.password })
            };
            const response = await fetch(loginEndpoint, requestOptions);
            const data = await response.json();
            const { token, userId, userName } = data

            if (response.status === 200) {
                handleSuccessfulMessage(true);
                handleError(false);
                localStorage.setItem('token', JSON.stringify(token));
                setToken(token);
                localStorage.setItem('userId', JSON.stringify(userId));
                setUserId(userId);
                localStorage.setItem('userName', JSON.stringify(userName));
                setUserName(userName);
                navigate('/', { replace: true });
            }
            if (response.status === 400 ||
                response.status === 401 ||
                response.status === 403 || 
                response.status === 500
            ) {
                handleSuccessfulMessage(false);
                handleError(true);
                localStorage.removeItem('token');
                setToken(null);
                localStorage.removeItem('userId');
                setUserId(null);
                localStorage.removeItem('userName');
                setUserName('Inicia sesión o regístrate');
            }
        } catch (err) {
            handleSuccessfulMessage(false);
            setError(true);
        }
    }

    let successModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => handleSuccessfulMessage(false)}
                    >
                        x
                    </button>
                </div>
                <div className={styles.messageContainer}>
                    <span>Has iniciado sesión correctamente ¡ya puedes comenzar a comprar productos!</span>
                </div>
                <div className={styles.btnsContainer}>
                    <div className={styles.goToLoginBtnContainer}>
                        <Link to={'/products'}>
                            <button 
                                onClick={() => {
                                    handleSuccessfulMessage(false);
                                }}
                            >
                                Ir a ver productos
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => {
                            handleError(false);
                        }}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, tus credenciales no son válidas, por favor intentalo nuevamente</span>
            </div>
        </section>
    );

    return (
        <section className={styles.section}>
            {error && errorModalContent}
            {showSuccessfulLoginMessage && successModalContent}
            <article className={styles.container}>
                <h2>Inicia Sesión para comprar</h2>
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmitData();
                }}>
                    <label>Correo electrónico</label>
                    <input value={userInputValues.email} onChange={handleChange} 
                        type="email" name='email' />
                    <label>Contraseña</label>
                    <input value={userInputValues.password} onChange={handleChange} 
                        type="password" name='password' />
                    <Link to={'/register'} className={styles.link}>¿No tienes cuenta con nosotros? Registrate</Link>
                    <button>Iniciar sesión</button>
                </form>
            </article>
        </section>
    )
}

export default LoginForm;