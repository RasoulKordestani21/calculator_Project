import { BTN_CLCICK } from "./calcType";

export const btnClick = (value) => {
    console.log(value)
    return {
        type: BTN_CLCICK,
        value: value.target.value,
        usage:value.target.getAttribute('usage')
    }
}