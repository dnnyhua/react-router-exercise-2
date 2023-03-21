import { Routes, Route, Navigate } from "react-router-dom";
import DogProfilePage from "./DogProfilePage";
import DogList from "./DogList";


const PageRouter = ({ dogs }) => {
    return (
        <Routes>

            {/* Homepage should also show a list of dogs with pictures */}
            <Route exact path='/dogs'
                element={<DogList dogs={dogs} />}
            />

            {/* Show profile of the dog from specified route */}
            <Route exact path='/dogs/:name'
                element={<DogProfilePage dogs={dogs} />}
            />

            {/* Redirect to home page if no route matches */}
            <Route
                path="*"
                element={<Navigate to="/dogs" />}
            />
        </Routes>
    )
}

export default PageRouter;
