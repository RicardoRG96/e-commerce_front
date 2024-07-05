import ProductDetails from "./ProductDetails";
import ProductImage from "./ProductImage";
import styles from '../../styles/public/ProductLayout.module.css';
import IMAGES from "../../images/images";
import { useParams } from "react-router-dom";

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
    const { productId } = useParams();

    const currentProduct = mockProductsDetails.find(product => product.id.toString() === productId);

    return (
        <main className={styles.main}>
            <ProductImage imageSrc={currentProduct ? currentProduct.src : ''} />
            <ProductDetails 
                brand={currentProduct ? currentProduct.brand : ''}
                productName={currentProduct ? currentProduct.productName : ''}
                price={currentProduct ? currentProduct.price : 0}
                description={currentProduct ? currentProduct.description : ''} 
            />
        </main>
    )
}

export default ProductLayout;