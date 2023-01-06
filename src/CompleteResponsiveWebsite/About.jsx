import React from "react";
import { NavLink } from "react-router-dom";
import Common from "./Common";
const About = () => {
    return (
        <>
            <Common
                title="Welcome to About Page"
                btn="Contact Now"
                visit="/contact"
            />
        </>
    )
}

export default About;