import { useEffect, useState } from 'react';
import { type ProductsApiResponse } from "../../types";
import styles from '../../styles/public/Products.module.css';
import FiltersTable from './FiltersTable';
import Product from './Product';
import useFetch from "../../hooks/useFetch";
import { useParams } from 'react-router-dom';

const Products: React.FC = () => {
    const [products, setProducts] = useState<ProductsApiResponse>([]);
    const [error, setError] = useState<boolean>(false);
    const { productCategory } = useParams();
    const productsDataEndpoint = `http://localhost:3000/api/products/${productCategory}`;
    const { data, err } = useFetch(productsDataEndpoint);  

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
            {!products.length ? loadingContent :
                <>
                    <FiltersTable products={products} />
                    {/* <OrderByBtn /> */}
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
                </>
            }
        </main>
    )
}

export default Products;