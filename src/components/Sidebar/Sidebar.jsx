
import './Sidebar.css';
import { Link } from 'react-router-dom';
import navList from '../../data/navItem';
import NavItem from './NavItem';

const Sidebar = () => {
    return(
     <aside id='sidebar' className='sidebar'>
        <ul className="sidebar-nav" id='sidebar-nav'>
            <li className="nav-item">
                <Link to="/" className="nav-link">
                    <i className="bi bi-grid"></i>
                    <span>Dashboard</span>
                </Link>
            </li>
            
            <li className="nav-item">
                <a href="#" 
                className="nav-link collapsed"
                data-bs-target="#components-nav"
                data-bs-toggle="collapse"
                >
                    <i className="bi bi-menu-button-wide"></i>
                    <span>Documents</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul 
                id="components-nav" 
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
                >
                    <li>
                        <Link to="/customers">
                            <i className="bi bi-circle"></i>
                            <span>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/suppliers">
                            <i className="bi bi-circle"></i>
                            <span>Suppliers</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/logistic">
                            <i className="bi bi-circle"></i>
                            <span>Logistic</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <a href="#" 
                data-bs-target="#forms-nav"
                data-bs-toggle="collapse"
                className="nav-link collapsed"
                >
                    <i className="bi bi-journal-text"></i>
                        <span>Forms</span>
                        <i className="bi bi-chevron-down ms-auto"></i>
                </a>

                <ul id="forms-nav" 
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
                >
                    <li>
                        <Link to="/application-form">
                            <i className="bi bi-circle"></i>
                            <span>Application Form</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/release-form">
                            <i className="bi bi-circle"></i>
                            <span>Release Form</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/cancellation-form">
                            <i className="bi bi-circle"></i>
                            <span>Cancellation Form</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <a href="#" 
                className="nav-link collapsed"
                data-bs-target="#tables-nav"
                data-bs-toggle="collapse"
                >
                    <i className="bi bi-layout-text-window-reverse"></i>
                    <span>Tables</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul 
                id="tables-nav"
                className="nav-content collapse"
                data-bs-parent="#sidebar-nav"
                >
                    <li>
                        <Link to="/general-tables">
                            <i className="bi bi-circle"></i>
                            <span>General Tables</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/data-tables">
                            <i className="bi bi-circle"></i>
                            <span>Data Tables</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-item">
                <a href="#"
                className='nav-link collapsed'
                data-bs-target="#charts-nav"
                data-bs-toggle="collapse"
                >
                    <i className="bi bi-bar-chart"></i>
                    <span>Charts</span>
                    <i className="bi bi-chevron-down ms-auto"></i>
                </a>
                <ul
                id='charts-nav'
                className='nav-content collapse'
                data-bs-parent="#sidebar-nav"
                >
                    <li>
                        <Link to="/bar-chart">
                            <i className="bi bi-circle"></i>
                            <span>Bar Chart</span>
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="/pie-chart">
                            <i className="bi bi-circle"></i>
                            <span>Pie Chart</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="/line-chart">
                            <i className="bi bi-circle"></i>
                            <span>Line Chart</span>
                        </Link>
                    </li>
                </ul>
            </li>

            <li className="nav-heading">Pages</li>
            
            {navList.map(nav => (
                <NavItem key={nav._id} nav={nav}/>
            ))}

        </ul>
     </aside>
    );
}

export default Sidebar;
