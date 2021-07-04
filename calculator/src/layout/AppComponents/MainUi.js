import React, { Component } from "react";
import NumPad from "./NumPad/NumPad";
import SideOperator from "./Side/SideOperator";
import TopOperator from "./Top/TopOperator";
import "./style.css";
export default class MainUi extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <TopOperator />
        </div>
        <div className="row">
          <NumPad />
          <SideOperator />
        </div>
      </div>
    );
  }
}
