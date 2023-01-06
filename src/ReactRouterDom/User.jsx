import React from "react";
import { useParams, useLocation, useHistory } from "react-router-dom";
const User = () => {
    const { fname, lname } = useParams();
    const location = useLocation();
    const history = useHistory();
    return (
        <>
            <h1>User {fname} {lname}Page</h1>
            <p>My current location is {location.pathname}</p>
            <button onClick={() => history.goBack()}>Click me</button>
        </>
    )
}

export default User;