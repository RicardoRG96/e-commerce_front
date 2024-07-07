import styles from '../../styles/private/SearchOrder.module.css';

const SearchOrder: React.FC = () => {
    return (
        <section className={styles.section}>
            <form action="submit">
                <input type="text" placeholder="Buscar por N° de pedido" />
                <button>
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
            </form>
        </section>
    )
}

export default SearchOrder;