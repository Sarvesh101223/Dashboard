
const NavMessage = () => {
    return(
        <li className="nav-item dropdown">
            <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
                <i className="bi bi-chat-left-text"></i>
                <span className="basge bg-success badge-number">3</span>
            </a>

            <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow-messages">
                <li className="dropdown-header">
                    You have 3 messages
                    <a href="#">
                        <span className="badge rounded-pill bg-primary p-2 ms-2">View All</span>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>

                        <div>
                            <h4>Maria Hill</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, dolorum!</p>
                            <p>4 hrs ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>

                        <div>
                            <h4>Maria Hill</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, dolorum!</p>
                            <p>4 hrs ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>

                <li className="message-item">
                    <a href="#">
                        <img src="assets/img/messages-1.jpg" alt="" className="rounded-circle"/>

                        <div>
                            <h4>Maria Hill</h4>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente, dolorum!</p>
                            <p>4 hrs ago</p>
                        </div>
                    </a>
                </li>
                <li>
                    <hr className="dropdown-divider" />
                </li>
            </ul>
        </li>
    )
}

export default NavMessage;