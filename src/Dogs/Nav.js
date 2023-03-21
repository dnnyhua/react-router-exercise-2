import { Link } from "react-router-dom";

const Nav = ({ dogs }) => {
    const links = dogs.map(dog => (
        <li>
            <Link key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
        </li>
    ));


    return (
        <div>
            <ul>
                <li><Link key='home' to="/dogs">Home</Link></li>
                {links}
            </ul>
        </div>
    )
}

export default Nav