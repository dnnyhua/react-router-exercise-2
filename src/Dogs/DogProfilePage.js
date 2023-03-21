

import { useParams, Navigate, Link } from "react-router-dom";

const DogProfilePage = ({ dogs }) => {
    const { name } = useParams();


    // Find the dog's information based on the name query in the url
    // Will return the object with dog's data
    if (name) {
        let dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase())
        if (!dog) {
            return <Navigate to="/dogs" />
        }
        return (
            <div>
                <div>
                    <h1>{dog.name}</h1>
                    <img src={dog.src} alt={dog.name} />
                    <p>Age: {dog.age} years old</p>
                    <ul>
                        {dog.facts.map((f, i) => (
                            <li key={i}>{f}</li>
                        ))}
                    </ul>
                </div>

                <Link to='/dogs'>Go Back</Link>
            </div>

        )

    }
    return null;
}
export default DogProfilePage;


// {
//     name: "Whiskey",
//     age: 5,
//     src: whiskey,
//     facts: [
//       "Whiskey loves eating popcorn.",
//       "Whiskey is a terrible guard dog.",
//       "Whiskey wants to cuddle with you!"
//     ]
//   },