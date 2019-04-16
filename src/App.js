import React, { Component } from "react";
import "./App.css";
import { shuffle } from "lodash";

import CurrentColor from "./CurrentColor";
import ColorsContainer from "./ColorsContainer";
import ScoreDisplay from "./ScoreDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.looseValue = -5;
    this.winValue = 10;
    this.colors = ["green", "red", "blue", "yellow"];
    this.state = {
      currentColors: shuffle(this.colors),
      score: 0,
      currentColor: this.colors[this.getRandomVaue()],
      distractiveColor: this.colors[this.getRandomVaue()]
    };
  }

  getRandomVaue() {
    return Math.floor(Math.random() * this.colors.length);
  }

  isCurrentColor(selectedColor) {
    return this.state.currentColor == selectedColor;
  }

  updateScore(selectedColor) {
    this.setState(state => {
      let operand = this.looseValue;
      if (this.isCurrentColor(selectedColor)) {
        operand = this.winValue;
      }
      return {
        score: state.score + operand,
        colors: shuffle(this.state.currentColors),
        currentColor: this.colors[this.getRandomVaue()],
        distractiveColor: this.colors[this.getRandomVaue()]
      };
    });
  }

  render() {
    return (
      <div className="game">
        <CurrentColor
          currentColor={this.state.currentColor}
          distractiveColor={this.state.distractiveColor}
        />
        <ScoreDisplay score={this.state.score} />
        <ColorsContainer
          colors={this.state.currentColors}
          updateScore={this.updateScore.bind(this)}
        />
      </div>
    );
  }
}

export default App;
