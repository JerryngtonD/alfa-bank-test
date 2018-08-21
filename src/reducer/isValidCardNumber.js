import {CHANGE_CARD_NUMBER} from "../constants";

export default (isValidCardNumber = false, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CARD_NUMBER:
            const {isValidCardNumber} = payload;
            console.log(isValidCardNumber);
            return isValidCardNumber;
    }

    return isValidCardNumber;
}
