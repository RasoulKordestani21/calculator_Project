import { BTN_CLCICK, CURRENT_STATEMENT_MODIFIER } from "./calcType";
const initialState = {
    btnType: {},
    clickedButton: null,
    name: '00',
    number: 3,
    val: '',
    currentStatement: '',
    tempCurrentStatement: '',
    lastNumberSize: 0,
    currentResult: 0,
    calcParts: [],
    statement:''

}

const calcReducer = (state = initialState, action) => {

    switch (action.type) {
        case BTN_CLCICK: return {
            ...state,
            clickedButton: '1',
            btnType: BTN_CLCICK,
            name: state.name + '0',
            number: state.number + 1,
            val: action.value,
            currentStatement: state.currentStatement + action.value,
            tempCurrentStatement: state.currentStatement + action.value,
            lastNumberSize: action.lastNumberSize,
            statement: action.statement,
            // currentResult:state.currentResult+10,
            btnType: console.log('@@@@@@@'),
        }
        case CURRENT_STATEMENT_MODIFIER: return {
            btnType: console.log('done'),
            ...state,
            currentResult: action.res,
            btnType:console.log(state.tempCurrentStatement),
            tempCurrentStatement: state.currentStatement.substr(0, state.currentStatement.length - state.val.length)
        }
        default: return {
            ...state
        }


    }


}

export default calcReducer;