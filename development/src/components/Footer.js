import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

class Footer extends Component {
  render() {
    return (
      <div className="Footer text-focus-in-fifth">
        <p class="footerText">
          {" "}
          Designed and built with all the love in the world by{" "}
          <a href="https://twitter.com/dpuiatti" target="_blank" rel="noopener">
            {" "}
            dpuiatti{" "}
          </a>
          . Maintained with your help.
        </p>
        <Container className="footerButtonsWrapper">
          <Row>
            <Col>
              {" "}
              <a
                href="https://danskii.github.io/Daniel-Puiatti/"
                target="_blank"
                rel="noopener"
              >
                {" "}
                About{" "}
              </a>
            </Col>
            <Col>
              {" "}
              <a
                href="mailto:dpuiatti@gmail.com"
                target="_blank"
                rel="noopener"
              >
                {" "}
                Contact{" "}
              </a>
            </Col>
            <Col>
              {" "}
              <a
                href="https://github.com/Danskii"
                target="_blank"
                rel="noopener"
              >
                {" "}
                Git{" "}
              </a>
            </Col>
          </Row>{" "}

          <p class="footerTextShare">
          {" "}
         Share the help, share this page:{" "}
        </p>
          <Row>
            <Col className="socialIconWrapper">
              {" "}
              <a
                href="https://www.facebook.com/sharer.php?u=https%3A%2F%2Fdanskii.github.io%2FToronto-Bike-Fixit-Map%2F"
                target="blank"
                rel="noopener noreferrer"
              >
              <img className="socialIcon" src={require("./images/facebook-icon.png")} alt="Share Page on Facebook" />
     
                {" "}
                {" "}
              </a>
              {" "}
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fdanskii.github.io%2FToronto-Bike-Fixit-Map%2F&text=Need%20to%20repair%20your%20bike%20in%20a%20pinch%3F%20Here's%20a%20map%20of%20all%20the%20free%20bike%20fixit%20stations%20in%20Toronto.&hashtags=Toronto,bikeTO,cycleTO"
                target="blank"
                rel="noopener noreferrer"
              >
              <img className="socialIcon" src={require("./images/twitter-icon.png")} alt="Share Page on Twitter" />
                {" "}
                {" "}
              </a>
              {" "}
              <a
                href="https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Fdanskii.github.io%2FToronto-Bike-Fixit-Map%2F&title=Toronto%20Bike%20Fixit%20Map&summary=Need%20to%20repair%20your%20bike%20in%20a%20pinch%3F%20Here's%20a%20map%20of%20all%20the%20free%20bike%20fixit%20stations%20in%20Toronto."
                target="blank"
                rel="noopener noreferrer"
              >
              <img className="socialIcon" src={require("./images/linkedin-icon.png")} alt="Share Page on LinkedIn" />
                {" "}
               {" "}
              </a>
            </Col>
         
          </Row>{" "}
        </Container>{" "}
      </div>
    );
  }
}
export default Footer;
