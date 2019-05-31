import React, {
  Component
} from "react";
import "./App.css";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Main from "./components/Main";
import {
  Container,
  Row,
  Col
} from "react-bootstrap";

class App extends Component {
  render() {
    return ( <
      div className = "App" >
      <
      Main / >
      <
      Map / >
      <
      Footer / >
      <
      /div>
    );
  }
}
export default App;