import { Link } from "react-router-dom";
import './Nav.css'

const Nav = ({ dogs }) => {
    const links = dogs.map(dog => (
        <li>
            <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
        </li>
    ));


    return (
        <div className="NavBar">
            <nav>
                <li><Link key='home' to="/dogs">Home</Link></li>
                {links}
            </nav>
        </div>
    )
}

export default Nav