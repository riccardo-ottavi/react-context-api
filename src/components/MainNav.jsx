import { Link, NavLink } from "react-router-dom";

const links = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/products', label: 'Products' }
]
export default function MainNav(){
    return(
        <nav>
            <ul>
                {links.map(link => (
                    <li className="nav-elem">
                        <NavLink to={link.path}>{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}