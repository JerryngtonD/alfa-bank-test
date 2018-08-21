import {CHANGE_CARD_NUMBER} from "../constants";

export default (cardNumber = null, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CARD_NUMBER:
            const {cardNumber} = payload;
            return cardNumber;
    }

    return cardNumber;
}
