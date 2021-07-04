import { BINARY_CLICKED }from '../Types/Types'

const initialState = {
    firstOperand: '',
    secondOperand: '',
    opoerator: '',
    updateCurrentResult: false,
    currentResult: '',
    updateCurrentStatement:'',
    currentStatement: '',
}


const binaryClickedReducer = (state = initialState, action) => {
    switch (action.type) {
        case BINARY_CLICKED: return {
            firstOperand: state.firstOperand,
            secondOperand: '',
        }
    }
}