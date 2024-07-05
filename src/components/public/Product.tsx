import { Link } from 'react-router-dom';
import styles from '../../styles/public/Product.module.css';

interface Props {
    id: number
    brand: string
    productName: string
    price: number
    src: string
}

const Product: React.FC<Props> = ({ id, brand, productName, price, src }) => {

    return (
        <Link to={`/products/${id}`} className={styles.link} >
            <div className={styles.productContainer}>
                <img src={src} alt="product-image" />
                <span className={styles.brand}>{brand}</span>
                <span>{productName}</span>
                <span className={styles.price}>{`$${price}`}</span>
            </div>
        </Link>
    )
}

// <section className={styles.section}>
        //     {products.map(product => 
        //         <Link to={'/product'} className={styles.link} >
        //             <div className={styles.productContainer}>
        //                 <img src={product.src} alt="product-image" />
        //                 <span className={styles.brand}>{product.brand}</span>
        //                 <span>{product.productName}</span>
        //                 <span className={styles.price}>{product.price}</span>
        //             </div>
        //         </Link>
        //     )}
        // </section>

export default Product;