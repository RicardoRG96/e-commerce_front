import { Link } from 'react-router-dom';
import styles from '../../styles/public/Product.module.css';
import IMAGES from '../../images/images';

interface Props {
    id: number
    brand: string
    productName: string
    price: number
    src: string
}

const Product: React.FC<Props> = ({ id, brand, productName, price, src }) => {
    return (
        <Link to={`/products/product/${id}`} className={styles.link} >
            <div className={styles.productContainer}>
                <img src={IMAGES[src as keyof typeof IMAGES]} alt="product-image" />
                <span className={styles.brand}>{brand}</span>
                <span>{productName}</span>
                <span className={styles.price}>{`$${price}`}</span>
            </div>
        </Link>
    )
}

export default Product;