import React, { Component } from "react";

class InputValidation extends Component {
  displayValidation = (textLength, minLength) => {
    if (textLength <= minLength) {
      return <p>Text too short</p>;
    }
    return <p>Text long enough</p>;
  };

  render() {
    return <div>{this.displayValidation(this.props.textLength, this.props.minLength)}</div>;
  }
}

export default InputValidation;
