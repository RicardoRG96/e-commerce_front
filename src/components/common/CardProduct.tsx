import { type ListOfProducts } from "../../types";
import IMAGES from "../../images/images";
import styles from '../../styles/common/CardProduct.module.css';

interface Props {
    products: ListOfProducts
}

const CardProduct: React.FC<Props> = ({ products }) => {
    return (
        <>
            {products.map((product, i) => 
                <article
                    key={i} 
                    className={styles.container}>
                    <img src={product.src} alt="product-image" />
                </article>
            )}
        </>
    )
}

<article className={styles.container}>
            <img src={IMAGES.jerseys} alt="product-image" />
        </article>

export default CardProduct;