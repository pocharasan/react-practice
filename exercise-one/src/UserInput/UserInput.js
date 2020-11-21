import React, { Component } from "react";

class UserInput extends Component {
  style = {
    width: "50%",
    padding: "12px 20px",
    margin: "8px 0",
    boxSizing: "border-box",
    textAlign: "center",
    color: "cornflowerblue"
  };
  render() {
    return (
      <div>
        <input style={this.style}
          type={Text}
          onChange={this.props.changed}
          value={this.props.value}
        />
      </div>
    );
  }
}

export default UserInput;
