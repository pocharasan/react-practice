import React, { Component } from "react";
import "./App.css";
import InputValidation from "./InputValidation/InputValidation";
import Character from "./Character/Character";
import "./Character/Character.css";
class App extends Component {
  state = {
    inputText: "",
  };

  inputTextChangeHandler = (event) => {
    this.setState({
      inputText: event.target.value,
    });
  };

  charRemoveHandler = (index) => {
    this.setState({
      inputText: this.removeCharFromString(this.state.inputText, index),
    });
  };

  renderCharacter = (inputText) => {
    const chars = inputText.split("");
    return chars.map((c, ind) => (
      <Character click={this.charRemoveHandler.bind(this, ind)}>{c}</Character>
    ));
  };

  removeCharFromString = (message, ind) => {
    return message.slice(0, ind) + message.slice(ind + 1, message.length);
  };

  render() {
    return (
      <div className="App">
        <div>
          <input
            type="text"
            value={this.state.inputText}
            onChange={this.inputTextChangeHandler}
          />
          <p>{this.state.inputText.length}</p>
          <InputValidation
            textLength={this.state.inputText.length}
            minLength={5}
          />
          {this.renderCharacter(this.state.inputText)}
        </div>
        <div className="Question">
          <ol>
            <li>
              Create an input field (in App component) with a change listener
              which outputs the length of the entered text below it (e.g. in a
              paragraph).
            </li>
            <li>
              Create a new component (=> ValidationComponent) which receives the
              text length as a prop
            </li>
            <li>
              Inside the ValidationComponent, either output "Text too short" or
              "Text long enough" depending on the text length (e.g. take 5 as a
              minimum length)
            </li>
            <li>
              Create another component (=> CharComponent) and style it as an
              inline box (=> display: inline-block, padding: 16px, text-align:
              center, margin: 16px, border: 1px solid black).
            </li>
            <li>
              Render a list of CharComponents where each CharComponent receives
              a different letter of the entered text (in the initial input
              field) as a prop.
            </li>
            <li>
              When you click a CharComponent, it should be removed from the
              entered text.
            </li>
          </ol>
          <p>
            Hint: Keep in mind that JavaScript strings are basically arrays!
          </p>
        </div>
      </div>
    );
  }
}

export default App;
