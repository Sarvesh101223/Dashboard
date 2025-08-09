
import { Link } from 'react-router-dom';

const NavItem = ( {nav} ) => {
    const getPath = (name) => {
        return `/${name.toLowerCase()}`;
    };

    return(
        <li className="nav-item" key={nav._id}>
            <Link to={getPath(nav.name)} className="nav-link collapsed">
                <i className={nav.icon}></i>
                <span>{nav.name}</span>
            </Link>
        </li>
    )
}

export default NavItem;
