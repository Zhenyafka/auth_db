import { NavLink } from "react-router-dom";
import './styles/navbar.css'
function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-link">
            <NavLink to='/data_table_0'>Approve/Refuse</NavLink>
            </div>
            <div className="nav-link2">
            <NavLink to='/data_table_1'>Unblock</NavLink>
            </div>
            <div className="nav-link">
            <NavLink to='/data_table_2'>Block</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;