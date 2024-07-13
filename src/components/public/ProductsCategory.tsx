import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import { type CategoriesApiResponse } from "../../types";
import { Link, useParams } from "react-router-dom";
import styles from '../../styles/public/ProductsCategory.module.css';
import IMAGES from "../../images/images";

const categoriesEndpoint = 'http://localhost:3000/api/products/categories';

const ProductsCategory: React.FC = () => {
    const [categories, setCategories] = useState<CategoriesApiResponse>([]);
    const [error, setError] = useState(false);
    const { productCategory } = useParams();
    const { data, err } = useFetch(categoriesEndpoint);

    useEffect(() => {
        if (data) {
            setCategories(data);
        }
    });

    useEffect(() => {
        if (err) {
            setError(true);
        }
    });

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => {
                            setError(false);
                        }}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, refresca la página</span>
            </div>
        </section>
    );

    let loadingContent = (
        <section className={styles.loadingContentContainer}>
                <div>
                    Cargando...
                </div>
        </section>
    )

    return (
        <main className={styles.main}>
            {!categories.length && loadingContent}
            {error && errorModalContent}
            <section className={styles.section}>
                {categories.map(category =>
                    <Link to={`/products/${productCategory}`} className={styles.link} key={category.id}>
                        <article className={styles.categoryContainer}>
                            <div className={styles.imageContainer}>
                                <img src={IMAGES[category.category_image_src as keyof typeof IMAGES]} alt="product-category-image" />
                            </div>
                            <div className={styles.categoryNameContainer}>
                                <span>{category.category}</span>
                            </div>
                        </article>
                    </Link> 
                )}
            </section>
        </main>
    )
}

export default ProductsCategory;