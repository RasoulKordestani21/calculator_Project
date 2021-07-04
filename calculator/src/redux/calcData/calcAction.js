import { BTN_CLCICK, CURRENT_STATEMENT_MODIFIER } from "./calcType";

import { useState, useEffect } from "react";
import { current } from "immer";



const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const unaryOperator = ["1/x", "x^2", "x^1/2", "C", "CE", "="]
let counter = 0;
let index = 0
let numStatement = ''
let unrStatment = '';
let binStatment = '';
export const btnClick = (value) => {
    index++;
    if (numbers.find(ele => ele === value.target.innerText)) {
        console.log(value.target.innerText)
        counter++;
        let numIndex;
        if (numIndex === (index - 1)) {
            numStatement = numStatement + value;
        } else {
            numStatement = ''
        }
        index++;
       numIndex = index;
    } else if (unaryOperator.includes(value.target.innerText)) {
        counter = counter;
    } else {
        counter = 0;
    }
    // console.log(counter);
    // console.log(value.target.innerText)

    return {
        type: BTN_CLCICK,
        value: value.target.innerText,
        lastNumberSize: counter,
        statement :numStatement
    }
}

export const currentStatementModifier = (res) => {
    console.log('this is res', res);
    return {
        type: CURRENT_STATEMENT_MODIFIER,
        res
    }
}