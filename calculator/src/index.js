import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import NumPad from "./layout/AppComponents/NumPad/NumPad";
import SideOperator from "./layout/AppComponents/Side/SideOperator";
import TopOperator from "./layout/AppComponents/Top/TopOperator";
import MainUi from "./layout/AppComponents/MainUi";
ReactDOM.render(<MainUi />, document.getElementById("root"));
