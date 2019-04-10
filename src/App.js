import React, { Component } from "react";
import "./App.css";
import { shuffle } from "lodash";

import CurrentColor from "./CurrentColor";
import ColorsContainer from "./ColorsContainer";
import ScoreDisplay from "./ScoreDisplay";

class App extends Component {
  constructor(props) {
    super(props);
    this.allColors = ["green", "red", "blue", "yellow"];
    this.state = {
      colors: shuffle(this.allColors),
      score: 0,
      currentColor: this.allColors[this.getRandomVaue()],
      distactiveColor: this.allColors[this.getRandomVaue()]
    };
  }

  getRandomVaue() {
    return Math.floor(Math.random() * 4);
  }

  updateScore(selectedColor) {
    this.setState(state => {
      if (this.state.currentColor == selectedColor) {
        state.score += 10;
      }
      return {
        score: state.score,
        colors: shuffle(state.colors),
        currentColor: this.allColors[this.getRandomVaue()],
        distactiveColor: this.allColors[this.getRandomVaue()]
      };
    });
  }

  render() {
    return (
      <div className="game">
        <CurrentColor
          currentColor={this.state.currentColor}
          distactiveColor={this.state.distactiveColor}
        />
        <ScoreDisplay score={this.state.score} />
        <ColorsContainer
          colors={this.state.colors}
          updateScore={this.updateScore.bind(this)}
        />
      </div>
    );
  }
}

export default App;
