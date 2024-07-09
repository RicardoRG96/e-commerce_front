import { useEffect, useState } from 'react';
import { type ProductsApiResponse } from "../../types";
import styles from '../../styles/public/Products.module.css';
import FiltersTable from './FiltersTable';
import OrderByBtn from './OrderByBtn';
import Product from './Product';
import useFetch from "../../hooks/useFetch";
import IMAGES from '../../images/images';

const mockProductsDetails = [
    {
        id: 1,
        brand: 'Apple',
        productName: 'iPhone 15 pro',
        price: 1000000,
        src: IMAGES.iphone15
    },
    {
        id: 2,
        brand: 'Sony',
        productName: 'Playstation',
        price: 600000,
        src: IMAGES.playstation5
    },
    {
        id:3,
        brand: 'Microsoft',
        productName: 'Xbox Series S',
        price: 600000,
        src: IMAGES.xbox
    },
    {   
        id: 4,
        brand: 'Apple',
        productName: 'Macbook',
        price: 1200000,
        src: IMAGES.macbook2
    }
]

const productsDataEndpoint = `http://localhost:3000/api/products/`;

const Products: React.FC = () => {
    const [products, setProducts] = useState<ProductsApiResponse>([]);
    const [productDetails] = useState(mockProductsDetails);
    const [error, setError] = useState<boolean>(false);
    const { data, err } = useFetch(productsDataEndpoint);

    useEffect(() => {
        if (data) {
            console.log(data);
            setProducts(data);
        }
    }, [data]);

    useEffect(() => {
        if (err) {
            console.log(err);
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
            <FiltersTable />
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

export default Products;