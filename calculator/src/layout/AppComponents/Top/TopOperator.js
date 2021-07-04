import React, { Component } from "react";
import "./style.css";
export default class TopOperator extends Component {
  clearElementClicked() {}
  clearAllClicked() {}
  backClicked() {}
  unaryClicked() {}
  binaryClicked() {}
  render() {
    return (
      <div className="top-container">
        <button className="top-item">%</button>
        <button className="top-item" onClick={this.clearElementClicked}>
          CE
        </button>
        <button className="top-item" onClick={this.clearAllClicked}>
          C
        </button>
        <button className="top-item" onClick={this.backClicked}>
          back
        </button>
        <button className="top-item" onClick={this.unaryClicked}>
          1/x
        </button>
        <button className="top-item" onClick={this.unaryClicked}>
          square
        </button>
        <button className="top-item" onClick={this.unaryClicked}>
          root(2&x)
        </button>
        <button className="top-item" onClick={this.binaryClicked}>
          ÷
        </button>
      </div>
    );
  }
}
