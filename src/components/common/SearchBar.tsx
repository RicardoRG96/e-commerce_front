import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchProductContext } from '../public/ProductSearchContext';
import styles from '../../styles/common/SearchBar.module.css';

const SearchBar: React.FC = () => {
    const [userInputValues, setUserInputValues] = useState('');
    const { setCurrentSearchedProduct } = useContext(SearchProductContext);
    const navigate = useNavigate();

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setUserInputValues(evt.target.value);
    const handleSubmit = () => {
        setCurrentSearchedProduct(userInputValues);
        navigate('/products/search');
    }

    return (
        <div className={styles.container}>
            <form 
                className={styles.form} 
                onSubmit={(evt) => {
                    evt.preventDefault();
                    handleSubmit();
                    setUserInputValues('');
                }}
            >
                <input value={userInputValues} onChange={handleChange} 
                    type="text" placeholder='¿Que estás buscando?' />
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;