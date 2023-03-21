import { Routes, Route, Navigate, } from "react-router-dom";
import { useState, useEffect } from "react"

import Colors from "./Colors";
import ColoredPage from "./ColoredPage"
import AddColorForm from "./AddColorForm"

const ColorRoutes = () => {

    // Check to see if there is anything in localStorage, if not start with red, green, blue
    const initialColors = JSON.parse(localStorage.getItem("colors")) || {
        red: "#FF0000",
        green: "#00FF00",
        blue: "#0000FF"
    };

    const [colors, setColors] = useState(initialColors)


    // each time we submit the form to add a new color, it will update current colors in localStorage
    useEffect(
        () => localStorage.setItem("colors", JSON.stringify(colors)),
        [colors]
    );

    // This will be passed down to the child component so that form submission will update colors above
    const handleAddColor = (newColorObj) => {
        // have newColorObj first so that new color will be at the top of the list
        setColors(c => ({ ...newColorObj, ...c }));
    }

    return (

        <Routes>
            <Route
                exact path='/colors'
                element={<Colors colors={colors} />}
            />
            <Route
                exact path='/colors/:color'
                element={<ColoredPage colors={colors} />}
            />
            <Route
                exact path='/colors/addcolorform'
                element={<AddColorForm addColor={handleAddColor} />}
            />
            {/* Redirect to home page if no route matches */}
            <Route
                path='/colors/:color'
                element={<Navigate to='/colors' />}
            />
        </Routes>
    )
}

export default ColorRoutes;
