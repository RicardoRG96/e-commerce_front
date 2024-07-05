import styles from '../../styles/public/FiltersTable.module.css';

const FiltersTable: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <div className={styles.productsDetailsContainer}>
                <span className={styles.categorie}>Smartphones</span>
                <span className={styles.brand}>Apple</span>
                <p>5 Productos encontrados</p>
            </div>
            <div className={styles.filtersAppliedContainer}>
                <div>
                    <span>Has seleccionado</span>
                    <button>Borrar filtros</button>
                </div>
                <div className={styles.removeFilterBtn}>
                    <span>Apple</span>
                    <button>X</button>
                </div>
            </div>
            <div className={styles.filterContainer}>
                <div className={styles.filterBox}>
                    <div className={styles.filter}>Marca</div>
                    <div>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                Apple
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.filterBox}>
                    <div className={styles.filter}>Precio</div>
                    <div>
                        <ul>
                            <li>
                                <input type="checkbox" />
                                $65.000-$99.000 (5) 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    )
}

export default FiltersTable;