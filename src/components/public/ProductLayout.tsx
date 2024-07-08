import { useState } from "react";
import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import styles from '../../styles/public/ProductLayout.module.css';
import IMAGES from "../../images/images";
import { useParams, Link } from "react-router-dom";

const mockProductsDetails = [
    {
        id: 1,
        brand: 'Apple',
        productName: 'iPhone 15 pro',
        price: 1000000,
        src: IMAGES.iphone15,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
    },
    {
        id: 2,
        brand: 'Sony',
        productName: 'Playstation 5',
        price: 600000,
        src: IMAGES.playstation5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
    },
    {
        id:3,
        brand: 'Microsoft',
        productName: 'Xbox Series S',
        price: 600000,
        src: IMAGES.xbox,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
    },
    {   
        id: 4,
        brand: 'Apple',
        productName: 'Macbook',
        price: 1200000,
        src: IMAGES.macbook2,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in'
    }
]


const ProductLayout: React.FC = () => {
    const [isProductAddedToCart, setIsProductAddedToCart] = useState(false);
    const { productId } = useParams();

    const currentProduct = mockProductsDetails.find(product => product.id.toString() === productId);

    const handleAddToCart = (value: boolean) => setIsProductAddedToCart(value);

    const modalContent = (
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

    return (
        <main className={styles.main}>
            {isProductAddedToCart && modalContent}
            <ProductImage imageSrc={currentProduct ? currentProduct.src : ''} />
            <ProductDetails 
                brand={currentProduct ? currentProduct.brand : ''}
                productName={currentProduct ? currentProduct.productName : ''}
                price={currentProduct ? currentProduct.price : 0}
                description={currentProduct ? currentProduct.description : ''} 
                onAddToCart={handleAddToCart}
            />
        </main>
    )
}

export default ProductLayout;