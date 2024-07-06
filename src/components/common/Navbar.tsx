import { Link } from "react-router-dom";
import Logo from "./Logo";
import ProductsBtn from "./ProductsBtn";
import SearchBar from "./SearchBar";
import SessionInfo from "./SessionInfo";
import CartButton from "./CartButton";
import styles from '../../styles/common/Navbar.module.css';

const Navbar: React.FC = () => {
    return (
        <nav className={styles.nav}>
            <Link to={'/'}> 
                <Logo />
            </Link>
            <Link to={'/products'} className={styles.link}>
                <ProductsBtn />
            </Link>
            <SearchBar />
            <Link to={'/login'}>
                <SessionInfo />
            </Link>
            <Link to={'/cart'} className={styles.link}>
                <CartButton />
            </Link>            
        </nav>
    )
}

export default Navbar;