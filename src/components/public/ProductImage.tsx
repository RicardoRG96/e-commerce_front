import styles from '../../styles/public/ProductImage.module.css';
import IMAGES from "../../images/images";

interface Props {
    imageSrc: string
}

const ProductImage: React.FC<Props> = ({ imageSrc }) => {
    return (
        <article className={styles.container}>
            <img src={IMAGES[imageSrc as keyof typeof IMAGES]} alt="product-image" />
        </article>
    )
}

export default ProductImage;