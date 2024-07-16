import styles from '../../styles/common/CoverProduct.module.css';

interface CoverProps {
    covers: string
}

const CoverProduct: React.FC<CoverProps> = ({ covers }) => {
    return (
        <article className={styles.container}>
            <img src={covers} alt="product-cover-image" />
        </article>
    )
}

export default CoverProduct;