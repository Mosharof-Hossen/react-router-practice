import {  NavLink } from "react-router-dom";
import './Header.css'

const Header = () => {
    return (
        <nav>
            <ul className="">
                <li className="inline ml-5"> <NavLink to={'/'}>Home</NavLink> </li>
                <li className="inline ml-5"> <NavLink to={'/users'}>Users</NavLink> </li>
                <li className="inline ml-5"> <NavLink to={'/posts'}>Posts</NavLink> </li>
                <li className="inline ml-5"> <NavLink to={'/about'}>About</NavLink> </li>
                <li className="inline ml-5"> <NavLink to={'/contact'}>Contact</NavLink> </li>
            </ul>
        </nav>
    );
};

export default Header;