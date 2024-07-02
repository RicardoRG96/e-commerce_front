import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import CoverProduct from "./CoverProduct";
import CardProduct from "./CardProduct";

const Home: React.FC = () => {

    return (
        <>
            <Navbar />
            <Hero />
            <main>
                <CoverProduct />
                <CardProduct />
            </main>
            <Footer />
        </>
    )
}

export default Home;