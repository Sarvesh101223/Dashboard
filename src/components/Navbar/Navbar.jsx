import './Navbar.css';
import NavNotice from './NavMessage/NavNotice';
import NavMessage from './NavMessage/NavMessage';
import NavAvatar from './NavMessage/NavAvatar';

const Navbar = () => {
    return(
        <nav className="header-nav ms-auto">
            <ul className="d-flex align-items-center">
                <NavNotice />
                <NavMessage />
                <NavAvatar />
            </ul>
        </nav>
    )
}

export default Navbar;