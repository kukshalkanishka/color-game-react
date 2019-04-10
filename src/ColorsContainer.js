import React, { Component } from "react";
import ColorContainer from "./ColorContainer";
import "./App.css";

class ColorsContainer extends Component {
  render() {
    let colors = this.props.colors.map(color => (
      <ColorContainer
        color={color}
        updateScore={this.props.updateScore.bind(null, color)}
      />
    ));
    return <div className="colors-container">{colors}</div>;
  }
}

export default ColorsContainer;
