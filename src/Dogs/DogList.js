import { Link } from "react-router-dom";

const DogList = ({ dogs }) => {
    return (
        <div>
            <h1>Furry friends who needs a home!</h1>
            {dogs.map(d => (
                <div>
                    <img src={d.src} alt={d.name} />
                    <h3>
                        <Link key={d.name} to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
                    </h3>
                </div>
            ))
            }
        </div>
    )
}


export default DogList;