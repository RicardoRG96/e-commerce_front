import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchProductContext } from '../public/ProductSearchContext';
import useFetch from '../../hooks/useFetch';
import styles from '../../styles/common/SearchBar.module.css';

const SearchBar: React.FC = () => {
    // const [productData, setProductData] = useState([]);
    const [userInputValues, setUserInputValues] = useState('');
    const { currentSearchedProduct, setCurrentSearchedProduct } = useContext(SearchProductContext);
    // const [isTyping, setIsTyping] = useState(true);
    const navigate = useNavigate();
    // const searchProductsEndpoint = `http://localhost:3000/api/products/search?${params}`;
    // const { data, err } = useFetch(searchProductsEndpoint);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setUserInputValues(evt.target.value);
    const handleSubmit = () => {
        setCurrentSearchedProduct(userInputValues);
        navigate('/products/search');
    }
    // const handleSubmit = async () => {
        
    // }

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