import { useEffect, useState } from 'react';
import useFetchGet from '../../hooks/useFetchGet';
import { type ProductsApiResponse } from '../../types';
import styles from '../../styles/public/ProductDetails.module.css';
import useFetchPost from '../../hooks/useFetchPost';

interface Props {
    brand: string
    productName: string
    price: number
    description: string
    onAddToCart: (value: boolean) => void
}

const API = `http://localhost:3000/api/cart/add-to-cart`;

const ProductDetails: React.FC<Props> = ({ brand, productName, price, description, onAddToCart }) => {
    // const [products, setProducts] = useState<ProductsApiResponse>([]);

    const handleClick = async () => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ user_id: 5, product_id: 1, quantity: 1 })
            };
            const response = await fetch(API, requestOptions);
            const result = await response.json();
            console.log(result);
            onAddToCart(true)
        } catch (err) {
            console.log(err);
            onAddToCart(false);
        }
    } 

    // useEffect(() => {
    //     if (data) {
    //         // console.log(data)
    //         setProducts(data);
    //     }
    // }, [data]);

    // useEffect(() => {
    //     if (error) {
    //         console.log(error)
    //     }
    // }, [error]);

    return (
        <article className={styles.detailsContainer}>
            <div className={styles.productDetails}>
                <span id={styles.brand}>{brand}</span>
                <span id={styles.name}>{productName}</span>
            </div>
            <div className={styles.description}>
                <p> 
                    {description}
                </p>
            </div>
            <div className={styles.price}>
                <span>{`$${price}`}</span>
            </div>
            <div>
                <div className={styles.btnContainer}>
                    <button 
                        className={styles.cartBtn}
                        onClick={handleClick}
                    >
                        Agregar al carro
                    </button>
                    <button className={styles.buyBtn}>Comprar ahora</button>
                </div>
            </div>
        </article>
    )
}

export default ProductDetails;