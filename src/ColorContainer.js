import React, { Component } from "react";

import "./App.css";

class ColorContainer extends Component {
  render() {
    return (
      <div
        className={`${this.props.color} color-div`}
        onClick={this.props.updateScore}
      />
    );
  }
}

export default ColorContainer;
