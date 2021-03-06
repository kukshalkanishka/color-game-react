import React, { Component } from "react";
import "./App.css";

class CurrentColor extends Component {
  render() {
    return (
      <div
        style={{ color: this.props.distractiveColor }}
        className="font-display"
      >
        {this.props.currentColor}
      </div>
    );
  }
}

export default CurrentColor;
