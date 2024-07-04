import { useState } from "react";
// import Navbar from "./Navbar";
import Hero from "./Hero";
// import Footer from "./Footer";
import CoverProduct from "./CoverProduct";
import CardProduct from "./CardProduct";
import styles from '../../styles/common/Home.module.css';
import IMAGES from "../../images/images";

const mockProducts = [
    {
        name: 'Camisetas de fútbol adidas',
        src: IMAGES.jerseys
    },
    {
        name: 'Macbook',
        src: IMAGES.macbook
    },
    {
        name: 'Refrigerador',
        src: IMAGES.refrigerator
    },
];

const mockCovers = [
    {
        name: 'Zapatillas Jordan',
        src: IMAGES.jordan
    },
    {
        name: 'Colección iPhone 15',
        src: IMAGES.iphone
    }
]

const Home: React.FC = () => {
    const [products] = useState(mockProducts);
    const [covers] = useState(mockCovers);

    return (
        <>
            <main>
                <Hero />
                <CoverProduct covers={covers[0].src} />
                <section className={styles.productsContainer}>
                    <CardProduct products={products} />
                </section>
                <CoverProduct covers={covers[1].src} />
            </main>
        </>
    )
}

export default Home;