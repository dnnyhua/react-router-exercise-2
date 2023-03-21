import { Link, useParams, Navigate } from "react-router-dom";

const ColoredPage = ({ colors }) => {
    const { color } = useParams()
    const hex = colors[color]

    if (!hex) {
        return <Navigate to="/colors" />
    }

    return (
        <div style={{ backgroundColor: hex, height: "1000px", width: "2000px" }}>
            <p>This is {color}</p>

            <Link to='/colors'>Go back</Link>

        </div>
    )
}

export default ColoredPage