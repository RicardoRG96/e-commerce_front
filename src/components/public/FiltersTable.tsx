import styles from '../../styles/public/FiltersTable.module.css';

const FiltersTable: React.FC = () => {
    return (
        <aside className={styles.aside}>
            <div>
                <p>Smartphones</p>
                <p>Apple</p>
                <p>5 Productos encontrados</p>
            </div>
            <div>
                <p>Has seleccionado</p>
                <p>Apple</p>
            </div>
            <div>
                <div>Marca</div>
                <div>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            Apple
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <div>Precio</div>
                <div>
                    <ul>
                        <li>
                            <input type="checkbox" />
                            $65.000-$99.000 (5) 
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default FiltersTable;