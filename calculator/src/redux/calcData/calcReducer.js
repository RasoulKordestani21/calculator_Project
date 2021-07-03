import { BTN_CLCICK } from "./calcType";

const initialState = {
    btnType: {},
    clickedButton: null,
    name:'00',
    number: 3,
    val: null,
   usage:null
}

const btnClicked = (state = initialState, action) => {
    
    switch (action.type) {
        case BTN_CLCICK: return {
            ...state,
            clickedButton: '1',
            btnType: BTN_CLCICK,
            name: state.name + '0',
            number: state.number + 1,
            val: action.value,
            usage:action.usage
        }

        default: return {
            ...state
        }


    }


}

export default btnClicked;