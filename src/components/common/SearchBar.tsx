import styles from '../../styles/common/SearchBar.module.css';

const SearchBar: React.FC = () => {
    return (
        <div className={styles.container}>
            <form className={styles.form} action="submit">
                <input type="text" placeholder='¿Que estás buscando?' />
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