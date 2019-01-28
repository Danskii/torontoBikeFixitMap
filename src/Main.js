import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Footer from "./Footer";
import Map from "./Map";
import Demo from "./Demo";
import footerButtons from "./footerButtons";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1 />
          <ul className="header">
            <li>
              <NavLink exact to="/">
                What is this?
              </NavLink>
            </li>
            <li>
              <NavLink to="/stuff">Why did I build this?</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home} />
            <Route path="/stuff" component={Stuff} />
            <Route path="/contact" component={Contact} />
          </div>
          <div className="shareButtonsWrapper">
            <Route path="/" component={Demo} />
          </div>
          <div className="respContainer">
            <Route path="/" component={Map} />
          </div>
          <div className="footer">
            <Route path="/" component={Footer} />
          </div>
          <div className="footerButtonsWrapper">
            <Route path="/" component={footerButtons} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
