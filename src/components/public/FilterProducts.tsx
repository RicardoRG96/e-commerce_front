import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FilterProductsContext } from "./FilterProductsContext";
import { type ProductsApiResponse } from "../../types";
import useFetch from "../../hooks/useFetch";
import FiltersTable from "./FiltersTable";
import OrderByBtn from "./OrderByBtn";
import Product from "./Product";
import styles from '../../styles/public/ProductSearch.module.css';

const FilterProducts: React.FC = () => {
    const [products, setProducts] = useState<ProductsApiResponse>([]);
    const [error, setError] = useState<boolean>(false);
    const navigate = useNavigate();
    const { currentFilters } = useContext(FilterProductsContext);

    const formatBrandFilter = () => {
        if (!currentFilters.brand.length) return '';
        const brand = currentFilters.brand.join(', ');
        return brand;
    }
    const formatMinPriceFilter = () => {
        if (currentFilters.priceRange === '') return '';
        const minPrice = currentFilters.priceRange.split('-')[0];
        return minPrice;
    }
    const formatMaxPriceFilter = () => {
        if (currentFilters.priceRange === '') return '';
        const maxPrice = currentFilters.priceRange.split('-')[1];
        return maxPrice;
    }

    const params = new URLSearchParams({
        minPrice: formatMinPriceFilter(),
        maxPrice: formatMaxPriceFilter(),
        category: currentFilters.category,
        brand: formatBrandFilter()
    });
    const searchProductEndpoint = `http://localhost:3000/api/products/filters?${params}`;
    const { data, err } = useFetch(searchProductEndpoint);

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
                    <FiltersTable products={products}  />
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

export default FilterProducts;