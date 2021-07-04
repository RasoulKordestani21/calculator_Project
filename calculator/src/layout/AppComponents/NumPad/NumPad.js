import React, { Component } from "react";
import "./style.css";
export default class NumPad extends Component {
  numClicked() {}
  plusMinnesClicked() {}
  render() {
    return (
      <div className="num-container">
        <button className="num-item" onClick={this.numClicked}>
          7
        </button>
        <button className="num-item" onClick={this.numClicked}>
          8
        </button>
        <button className="num-item" onClick={this.numClicked}>
          9
        </button>
        <button className="num-item" onClick={this.numClicked}>
          4
        </button>
        <button className="num-item" onClick={this.numClicked}>
          5
        </button>
        <button className="num-item" onClick={this.numClicked}>
          6
        </button>
        <button className="num-item" onClick={this.numClicked}>
          1
        </button>
        <button className="num-item" onClick={this.numClicked}>
          2
        </button>
        <button className="num-item" onClick={this.numClicked}>
          3
        </button>
        <button className="num-item" onClick={this.plusMinnesClicked}>
          +/-
        </button>
        <button className="num-item" onClick={this.numClicked}>
          0
        </button>
        <button className="num-item" onClick={this.numClicked}>
          .
        </button>
      </div>
    );
  }
}
