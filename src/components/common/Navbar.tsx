import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../public/AuthContext";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SessionInfo from "./SessionInfo";
import CartButton from "./CartButton";
import styles from '../../styles/common/Navbar.module.css';

const Navbar: React.FC = () => {
    const { userName } = useContext(AuthContext);

    return (
        <nav className={styles.nav}>
            <Link to={'/'}> 
                <Logo />
            </Link> 
            <Link to={'/categories'} className={styles.link}>
                <button>Categorías</button>
            </Link>
            <SearchBar />
            <Link to={userName !== 'Inicia sesión o regístrate' ? '/myaccount' : '/login'}>
                <SessionInfo />
            </Link>
            <Link to={'/cart'} className={styles.link}>
                <CartButton />
            </Link>
            <Link to={'/myaccount'}>
                <button>mi cuenta</button>
            </Link>      
        </nav>
    )
}

export default Navbar;