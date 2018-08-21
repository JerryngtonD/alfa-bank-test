import {CHANGE_PAY} from "../constants";

export default (isValidPay = false, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_PAY:
            const {isValidAmount} = payload;
            const result  = (isValidAmount > 0) ? true : false;

            return result;
    }

    return isValidPay;
}
