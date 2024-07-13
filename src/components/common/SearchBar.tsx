import { useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import styles from '../../styles/common/SearchBar.module.css';
import { useState } from 'react';

const SearchBar: React.FC = () => {
    const [productData, setProductData] = useState([]);
    const [userInputValues, setUserInputValues] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const navigate = useNavigate();
    const params = new URLSearchParams({
        name: userInputValues
    });
    const searchProductsEndpoint = `http://localhost:3000/api/products/search?${params}`;
    const { data, err } = useFetch(searchProductsEndpoint);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => setUserInputValues(evt.target.value);
    const handleSubmit = async () => {
        
    }

    return (
        <div className={styles.container}>
            <form className={styles.form}>
                <input value={userInputValues} onChange={handleChange} 
                    type="text" placeholder='¿Que estás buscando?' />
                <button>
                    <i 
                        style={
                            {
                                fontSize: '25px', 
                                color: '#EEEEEE'
                            }
                        }
                        className="fa-solid fa-magnifying-glass">
                    </i>
                </button>
            </form>
        </div>
    )
}

export default SearchBar;