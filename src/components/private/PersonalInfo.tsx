import { useState, useContext } from 'react';
import { AuthContext } from '../public/AuthContext';
import styles from '../../styles/private/PersonalInfo.module.css';

const updateUserDataEndpoint = 'http://localhost:3000/api/myaccount/update-user-info';

interface Props {
    userName: string
    userEmail: string
}

const PersonalInfo: React.FC<Props> = ({ userName, userEmail }) => {
    const [userInputValues, setUserInputValues] = useState({
        name: userName,
        email: userEmail
    });
    const [error, setError] = useState(false);
    const [successUpdate, setSuccessUpdate] = useState(false);
    const { token, userId, setUserName } = useContext(AuthContext);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setUserInputValues({
            ...userInputValues,
            [evt.target.name]: evt.target.value
        })
    }

    const handleSubmit = async () => {
        try {
            const requestOptions = {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' +  token 
                },
                body: JSON.stringify({ userId, name: userInputValues.name, email: userInputValues.email })
            }
            const response = await fetch(updateUserDataEndpoint, requestOptions);
            const result = await response.json();
            const updatedUserName = result[0].name;

            if (response.status === 200) {
                setSuccessUpdate(true);
                setError(false);
                localStorage.setItem('userName', JSON.stringify(updatedUserName));
                setUserName(updatedUserName);
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
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => setError(false)}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, inténtalo nuevamente</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <button 
                            onClick={() => setError(false)}
                            >
                            Intentar nuevamente
                        </button>
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
            {successUpdate && successModalContent}
            <section className={styles.container}>
                <div className={styles.title}>
                    Datos personales
                </div>
                <div className={styles.formContainer}>
                    <form onSubmit={(evt) => {
                        evt.preventDefault();
                        handleSubmit();
                    }}>
                        <label>Nombre</label>
                        <input value={userInputValues.name} onChange={handleChange} 
                            type="text" name='name' />
                        <label>Correo electrónico</label>
                        <input value={userInputValues.email} onChange={handleChange} 
                            type="email" name='email' />
                        <button>Guadar</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default PersonalInfo;