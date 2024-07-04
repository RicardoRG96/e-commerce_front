import styles from '../../styles/public/Products.module.css';
import FiltersTable from './FiltersTable';
import OrderByBtn from './OrderByBtn';
import Product from './Product';

const Products: React.FC = () => {
    return (
        <main className={styles.main}>
            <FiltersTable />
            <OrderByBtn />
            <Product />
        </main>
    )
}

export default Products;