import { BrowserRouter } from "react-router-dom";
import ColorRoutes from "./Color/ColorRoutes"


function App2() {
    return (
        <div>
            <BrowserRouter>
                <ColorRoutes />
            </BrowserRouter>
        </div>

    );
}



export default App2;
