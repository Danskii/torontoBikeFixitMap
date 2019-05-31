import React, {
  Component
} from "react";
import {
  Jumbotron
} from "react-bootstrap";

class Main extends Component {
  render() {
    return ( <
      div className = "Main slide-out-top" >
      <
      div className = "ripple-background" >
      <
      div className = "circle xxlarge shade1" / >
      <
      div className = "circle xlarge shade2" / >
      <
      div className = "circle large shade3" / >
      <
      div className = "circle mediun shade4" / >
      <
      div className = "circle small shade5" / >
      <
      /div> <
      Jumbotron className = "homepageWelcome text-blur-out" >
      <
      h1 className = "text-focus-in-first" > Hello and welcome < /h1> <
      p className = "homepageSubHeading text-focus-in-second" >
      Need to fix your bike in a pinch? Here's a map of all the free bike fixit stations in Toronto. <
      /p> <
      p className = "homepageSubHeading text-focus-in-third" >
      I hope you find these helpful in a biking emergency! <
      /p> <
      /Jumbotron>

      <
      /div>
    );
  }
}
export default Main;