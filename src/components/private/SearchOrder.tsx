import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/private/SearchOrder.module.css';

const SearchOrder: React.FC = () => {
    const [userInputValues, setUserInputValues] = useState('');
    const [emptyInputError, setEmpyInputError] = useState(false);
    const navigate = useNavigate();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setUserInputValues(evt.target.value);

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => {
                            setEmpyInputError(false);
                            navigate('/myaccount/orders');
                        }}
                    >
                        x
                    </button>
                </div>
                <span>Debes ingresar un número de orden válido.</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.tryAgainBtnContainer}>
                        <button 
                            onClick={() => {
                                setEmpyInputError(false);
                                navigate('/myaccount/orders');
                            }}
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
            {emptyInputError && errorModalContent}
            <section className={styles.section}>
                <form onSubmit={(evt) => {
                    evt.preventDefault();
                    userInputValues === ''
                        ? setEmpyInputError(true)
                        : navigate(`/myaccount/orders/search/${userInputValues}`);
                }}>
                    <input value={userInputValues} onChange={handleChange}
                        type="number" placeholder="Buscar por N° de pedido" />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </section>
        </>
    )
}

export default SearchOrder;