import React from "react";

import { Route, Switch, Redirect } from 'react-router-dom'

import Navbar from "./CompleteResponsiveWebsite/Navbar";
import Home from "./CompleteResponsiveWebsite/Home";
import About from "./CompleteResponsiveWebsite/About";
import Contact from "./CompleteResponsiveWebsite/Contact";
import Service from "./CompleteResponsiveWebsite/Service";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./index.css"
const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/service" component={Service} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/" />
            </Switch>

        </>
    )
}

export default App;