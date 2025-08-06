import './Header.css';
import Logo from '../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';
import Navbar from '../Navbar/Navbar';

const Header = () => {
    return(
        <header id="header" className="header fixed-top d-flex align-items-center">
            {/* Logo */}
            <Logo />

            {/* Searchbar */}
            <Searchbar />

            {/* Navbar */}
            <Navbar />
        </header>
    )
}

export default Header;