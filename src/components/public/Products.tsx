import { useState } from 'react';
import styles from '../../styles/public/Products.module.css';
import FiltersTable from './FiltersTable';
import OrderByBtn from './OrderByBtn';
import Product from './Product';
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

const Products: React.FC = () => {
    const [productDetails] = useState(mockProductsDetails);

    return (
        <main className={styles.main}>
            <FiltersTable />
            <OrderByBtn />
            <section className={styles.section}>
                {productDetails.map(product => 
                    <Product 
                        key={product.id}
                        id={product.id}
                        brand={product.brand}
                        productName={product.productName}
                        price={product.price}
                        src={product.src} 
                    />
                )}
            </section>
        </main>
    )
}

export default Products;