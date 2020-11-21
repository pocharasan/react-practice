import React, { Component } from "react";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";
import './UserOutput/UserOutput.css'
class App extends Component {
  state = {
    input: "You can put your name here",
  };

  onUserInputChangeHandler = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  render() {
    return (
      <div className="App">
        <UserInput
          changed={this.onUserInputChangeHandler}
          value={this.state.input}
        />
        <UserOutput value={this.state.input} />
      </div>
    );
  }
}

export default App;
