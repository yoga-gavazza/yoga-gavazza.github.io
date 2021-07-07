import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "../pages/home/home";
import About from "../pages/about/about";
import Galeria from "../pages/galeria/galeria";
import Appnav from "./navbar";
import Login from "../pages/login/login";
import Postagem from "../pages/postagem/postagem";
import RegisterUser from "../pages/registro/registro";
export default function Routes() {
  return (
    <BrowserRouter>
      <Appnav></Appnav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/galeria" exact component={Galeria} />
        <Route path="/login" exact component={Login} />
        <Route path="/postagem" exact component={Postagem} />
        <Route path="/registro" exact component={RegisterUser} />
        <Route path="/*" component={Home} />
      </Switch>
    </BrowserRouter>
  );
}
