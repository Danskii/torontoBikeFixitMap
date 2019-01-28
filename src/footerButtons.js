import React, { Component } from "react";

class footerButtons extends Component {
  render() {
    return (
      <div>
        <ul className="footerButtonWrapperDiv">
        <a href="https://danskii.github.io/Daniel-Puiatti/" target="_blank">
          <li>Who am I?</li>
          </a>
          <a href="mailto:dpuiatti@gmail.com" target="_blank">
          <li>Contact Me</li>
          </a>
          <a href="https://github.com/Danskii" target="_blank">
            <li>GitHub</li>
          </a>
        </ul>
      </div>
    );
  }
}

export default footerButtons;
