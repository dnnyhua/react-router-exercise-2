
import { Link } from "react-router-dom"

const Colors = ({ colors }) => {

    return (
        <div>
            <Link to='/colors/addcolorform'><h1>add a color</h1></Link>

            <div>
                <ul>
                    {Object.keys(colors).map(colorName => (
                        <li>
                            <Link to={`/colors/${colorName}`}>{colorName}</Link>
                        </li>
                    ))}
                </ul>

            </div>
        </div>


    )
}

export default Colors