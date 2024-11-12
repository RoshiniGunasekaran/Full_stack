import { Link } from 'react-router-dom';
import './Navbar.css'; 

const Navbar = () => {
    const handleHomeClick = (event) => {
        event.preventDefault(); // Prevents navigation
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <h1>Heat & eat</h1>
            </div>
            <ul className="nav-links">
                <li><a href="/welcome" onClick={handleHomeClick}>Home</a></li>
                <li><Link to="/add-recipe">Add Recipe</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/trending">Trending</Link></li>
            </ul>
            <div className='contest_button'>
                <ul className='contest'>
                    <li><Link to="/contest">Latest Contest</Link></li>
                </ul>
            </div>  
        </nav>
    );
};

export default Navbar;
