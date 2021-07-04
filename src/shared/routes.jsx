import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from '../pages/home/home'
import About from '../pages/about/about'
import Appnav from './navbar'
export default function Routes() {
    return (
        <BrowserRouter>
            <Appnav></Appnav>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/*" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}
