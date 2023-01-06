import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
    return (
        <>
            <div className="card" >
                <img src={props.imgsrc} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.content}</p>
                    <NavLink href="#" className="btn btn-primary">Click me</NavLink>
                </div>
            </div>
        </>
    )
}

export default Card;