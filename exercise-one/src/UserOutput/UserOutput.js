import React, { Component } from "react";

class UserOutput extends Component {
  render() {
    return (
      <div className='UserOutput'>
        <p>My name is {this.props.value}.</p>
        <p>{this.props.value} really love to code.</p>
      </div>
    );
  }
}

export default UserOutput;
