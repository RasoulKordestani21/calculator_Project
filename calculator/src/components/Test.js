// import React, { Component } from 'react';
import store from '../redux/store';
import { connect } from 'react-redux';
import { currentStatementModifier } from '../redux/calcData/calcAction'
import { useState, useCallback } from 'react';
import { btnClick } from '../redux/index';

// import React from 'react'


const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
const unaryOperator = ["1/x", "x^2", "x^1/2", "C", "CE", "="]
function Test(props) {
    
    const [counter, setCounter] = useState(0);
    const memoizedCallback = useCallback(
        (newResult) => {
            props.currentStatementModifier(newResult)
        },
        [props.currentResult],
    );

    function findTypeOfButton() {
        let operator;
        if (numbers.some(ele => ele === props.val)) {
            operator = "operand"
        } else if (unaryOperator.some(ele => ele === props.val)) {
            operator = "unaryOperator";
        } else {
            operator = "binaryOperator";
        }
        return operator
    }
    console.log(findTypeOfButton())
    if (findTypeOfButton() === "unaryOperator") {
        let operator = props.val;
        console.log(props.val);
        // if (operator === '1/x') {
        // console.log(1 / eval(props.currentStatement.substr(0, props.currentStatement.length - "1/x".length)));

        switch (operator) {
            case "1/x": {
                let len = props.currentStatement.length;
                let diff = props.lastNumberSize;
                // console.log(eval(1 / props.currentStatement.substr(len - diff - 3, diff)));
                
                let newResult = eval(1 / props.currentStatement.substr(len - diff - 3, diff));
                memoizedCallback(newResult);
                console.log(props.currentResult)
            }
                break;
            case "x^2": {
                console.log(eval(props.currentStatement.substr(0, props.currentStatement.length - "x^2".length)) ** 2)
            }
                break;
            case "x^1/2": {
                console.log(eval(props.currentStatement.substr(0, props.currentStatement.length - "x^1/2".length)) ** .5)
            }
                break;
            case "=": {
                console.log(eval(props.currentStatement.substr(0, props.currentStatement.length - "=".length)))
            }
                break;
            //Todo
            case "CE": {
                console.log(eval(props.currentStatement.substr(0, props.currentStatement.length - "CE".length)))
            }
                break;
            case "C": {
                // console.log('')

            }
                break;
            default:
                break;

        }
    }
    return (
        <div>
            <div>current is : {props.currentStatement}</div>
             <div>current result is :{props.statement}</div>
            <button onClick={props.currentStatementModifier}> modifier</button>
        </div>
    )
}


const mapStateToProps = state => {

    // console.log('1-state is : ', state)
    return {
        ...state,
        currentResult: state.currentResult
    }
}
const mapDispatchToProps = dispatch => {
    return {
        currentStatementModifier: (res) => { dispatch(currentStatementModifier(res)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
