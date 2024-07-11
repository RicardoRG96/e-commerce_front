import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterFormType } from "../../types";
import styles from '../../styles/public/RegisterForm.module.css';

const registerEndpoint = 'http://localhost:3000/register';

const RegisterForm: React.FC = () => {
    const [userInputValues, setUserInputValues] = useState<RegisterFormType>({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState(false);
    const [showSuccessfulRegisterMessage, setShowSuccessfulRegisterMessage] = useState(false);
    const navigate = useNavigate();

    const handleError = (value: boolean) => setError(value);
    const handleSuccessfulMessage = (value: boolean) => setShowSuccessfulRegisterMessage(value);
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
                body: JSON.stringify({ name: userInputValues.name, email: userInputValues.email, password: userInputValues.password })
            };
            const response = await fetch(registerEndpoint, requestOptions);

            if (response.status === 201) {
                handleSuccessfulMessage(true);
                handleError(false);
                setUserInputValues({
                    name: '',
                    email: '',
                    password: ''
                });
                navigate('/login', { replace: true });
            }
            if (response.status === 400 || 
                response.status === 500 || 
                response.status === 404
            ) {
                handleSuccessfulMessage(false);
                handleError(true);
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
                    <span>Registro exitoso</span>
                </div>
                <div className={styles.btnsContainer}>
                    <div className={styles.goToLoginBtnContainer}>
                        <Link to={'/login'}>
                            <button 
                                onClick={() => {
                                    handleSuccessfulMessage(false);
                                }}
                            >
                                Ir a iniciar sesión
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
                <span>Lo sentimos, ocurrió un error inesperado, por favor, inténtalo nuevamente</span>
            </div>
        </section>
    );

    return(
        <section className={styles.section}>
            {error && errorModalContent}
            {showSuccessfulRegisterMessage && successModalContent}
            <article className={styles.container}>
                <h2>Crea tu cuenta en E-commerce</h2>
                <form 
                    onSubmit={(evt) => {
                        evt.preventDefault();
                        handleSubmitData();
                    }}
                >
                    <label>Nombre</label>
                    <input value={userInputValues.name} onChange={handleChange} 
                        type="text" name='name' />
                    <label>Correo electrónico</label>
                    <input value={userInputValues.email} onChange={handleChange} 
                        type="email" name='email' />
                    <label>Contraseña</label>
                    <input value={userInputValues.password} onChange={handleChange} 
                        type="password" name='password' />
                    <div className={styles.passwordRulesContainer}>
                        <div>
                            Debe tener al menos 7 caracteres
                        </div>
                    </div>
                    <button>Crear cuenta</button>
                    <Link to={'/login'} className={styles.link}>¿Ya tienes cuenta? Inicia sesión</Link>
                </form>
            </article>
        </section>
    )
}

export default RegisterForm;