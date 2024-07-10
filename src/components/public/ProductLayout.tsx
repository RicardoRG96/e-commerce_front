import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { type ProductsApiResponse } from "../../types";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import styles from '../../styles/public/ProductLayout.module.css';
import useFetch from "../../hooks/useFetch";

const productsDataEndpoint = `http://localhost:3000/api/products/`;

const ProductLayout: React.FC = () => {
    const [products, setProducts] = useState<ProductsApiResponse>([]);
    const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
    const [error, setError] = useState<boolean>(false);
    const { data, err } = useFetch(productsDataEndpoint);
    const { productId } = useParams();

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

    const currentProduct = products.find(product => product.id.toString() === productId);

    const handleAddToCart = (value: boolean) => setIsProductAddedToCart(value);
    const handleError = (value: boolean) => setError(value);
    
    let successModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button onClick={() => handleAddToCart(false)}>x</button>
                </div>
                <span>¡Producto añadido con éxito!</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.keepBuyingBtnContainer}>
                        <button onClick={() => handleAddToCart(false)}>Seguir comprando</button>
                    </div>
                    <div className={styles.goToCartBtnContainer}>
                        <Link to={'/cart'} className={styles.link}>
                            <button>Ir al carro</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );

    let errorModalContent = (
        <section className={styles.modalOverlay}>
            <div className={styles.modalContainer}>
                <div className={styles.closeBtnContainer}>
                    <button 
                        onClick={() => {
                            handleAddToCart(false);
                            handleError(false);
                        }}
                    >
                        x
                    </button>
                </div>
                <span>Lo sentimos, ocurrió un error inesperado, por favor, inténtalo nuevamente</span>
                <div className={styles.btnsContainer}>
                    <div className={styles.keepBuyingBtnContainer}>
                        <button 
                            onClick={() => {
                                handleAddToCart(false);
                                handleError(false);
                            }}
                            >
                            Seguir comprando
                        </button>
                    </div>
                    <div className={styles.goToCartBtnContainer}>
                    </div>
                </div>
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
            {isProductAddedToCart && successModalContent}
            {error && errorModalContent}
            {!products.length ? loadingContent :
                <>
                    <ProductImage imageSrc={currentProduct ? currentProduct.image_src : ''} />
                    <ProductDetails
                        productId={currentProduct ? currentProduct.id : 0}
                        brand={currentProduct ? currentProduct.brand : ''}
                        productName={currentProduct ? currentProduct.name : ''}
                        price={currentProduct ? currentProduct.price : 0}
                        description={currentProduct ? currentProduct.description : ''} 
                        onAddToCart={handleAddToCart}
                        handleError={handleError}
                    />
                </>
            }
        </main>
    )
}

export default ProductLayout;