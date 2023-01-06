import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const Home = () => {
    return (
        <>
            <Common
                title="Grow Your Business with"
                btn="Get started"
                visit="/service"
            />
        </>
    )
}

export default Home;