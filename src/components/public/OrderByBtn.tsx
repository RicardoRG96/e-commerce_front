import styles from '../../styles/public/OrderByBtn.module.css';

const OrderByBtn: React.FC = () => {
    return (
        <section className={styles.section}>
            <form action="#" className={styles.form}>
                <label htmlFor="price">Ordernar por: </label>
                <select name="prices" id="price">
                    <option value="Precio menor a mayor">Precio Menor a Mayor</option>
                    <option value="Precio mayor a menor">Precio Mayor a Menor</option>
                </select>
            </form>
        </section>
    )
}

export default OrderByBtn;