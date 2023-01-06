import React from "react";
import { NavLink } from "react-router-dom";
const Common = (props) => {
    const imgsrc = `http://source.unsplash.com/400x300/?company`
    return (
        <>
            <section id="header" >
                <div className="container-fluid nav_bg">
                    <div className="row">
                        <div className="col-10 mx-auto d-flex align-items-center justify-content-center">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>{props.title} <strong className="brand-name">CompanyName</strong></h1>
                                    <h2 className="my-3">We are team of talented developers making websites</h2>
                                    <div className="mt-3">
                                        <NavLink className="btn-get-started" to={props.visit} >{props.btn}</NavLink>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 order-1 order-lg-2 header-img">
                                <img src={imgsrc} className="img-fluid animated" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Common;