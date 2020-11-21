import React, { Component } from "react";

class Character extends Component {
  render() {
    return (
      <div className="character" onClick={this.props.click}>
        <p>{this.props.children}</p>
      </div>
    );
  }
}

export default Character;
