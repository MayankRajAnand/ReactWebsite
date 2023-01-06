import React from "react";
import { NavLink } from "react-router-dom"
const Menu = () => {
    return (
        <>
            <NavLink exact activeClassName="active_class" to='/'>About Us</NavLink>
            <br />
            <NavLink exact activeClassName="active_class" to='/contact'>Contact Us</NavLink>
            <br />
            <NavLink exact activeClassName="active_class" to='/user/mayank'>User</NavLink>
        </>
    )
}

export default Menu;