import React, { Component } from "react";
import "./App.css";

class ScoreDisplay extends Component {
  render() {
    return <div className="font-display">{this.props.score}</div>;
  }
}

export default ScoreDisplay;
