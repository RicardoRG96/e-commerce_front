import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SearchProductContext } from "./ProductSearchContext";
import { type ProductsApiResponse } from "../../types";
import useFetch from "../../hooks/useFetch";
import FiltersTable from "./FiltersTable";
import OrderByBtn from "./OrderByBtn";
import Product from "./Product";
import styles from '../../styles/public/ProductSearch.module.css';

const ProductSearch: React.FC = () => {
    const [products, setProducts] = useState<ProductsApiResponse>([]);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const { currentSearchedProduct } = useContext(SearchProductContext);
    const params = new URLSearchParams({
        name: currentSearchedProduct
    });
    const searchProductEndpoint = `http://localhost:3000/api/products/search?${params}`;
    const { data, err, statusCodeResponse } = useFetch(searchProductEndpoint);

    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data]);

    useEffect(() => {
        if (err) {
            setError(true);
        }
    });   
    
    let noMatchProductsContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => {
                            navigate('/');
                        }}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, no encontramos coincidencias en tu búsqueda</span>
            </div>
        </section>
    )

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
            {error && errorModalContent}
            {statusCodeResponse === 404 && noMatchProductsContent}
            <FiltersTable products={products} />
            <OrderByBtn />
            {!products.length ? loadingContent :
                <section className={styles.section}>
                    {products.map(product => 
                        <Product 
                            key={product.id}
                            id={product.id}
                            brand={product.brand}
                            productName={product.name}
                            price={product.price}
                            src={product.image_src} 
                        />
                    )}
                </section>
            }
        </main>
    )
}

export default ProductSearch;