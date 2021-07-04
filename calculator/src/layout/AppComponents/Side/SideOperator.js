import React, { Component } from "react";
import "./style.css";
export default class SideOperator extends Component {
  binaryClicked() {}
  equalClicked() {}
  render() {
    return (
      <div className="side-container">
        <button className="side-item" onClick={this.binaryClicked}>
          ×
        </button>
        <button className="side-item" onClick={this.binaryClicked}>
          -
        </button>
        <button className="side-item" onClick={this.binaryClicked}>
          +
        </button>
        <button className="side-item" onClick={this.equalClicked}>
          =
        </button>
      </div>
    );
  }
}
