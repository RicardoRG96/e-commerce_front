import Logo from "./Logo";
import HambugerBtn from "./HamburgerBtn";
import SearchBar from "./SearchBar";
import LocationBtn from "./LocationBtn";
import SessionInfo from "./SessionInfo";
import CartButton from "./CartButton";

const Navbar: React.FC = () => {
    return (
        <nav>
            <Logo />
            <HambugerBtn />
            <LocationBtn />
            <SearchBar />
            <SessionInfo />
            <CartButton />            
        </nav>
    )
}

export default Navbar;