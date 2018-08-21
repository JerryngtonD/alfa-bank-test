import {CHANGE_CARD_OWNER} from "../constants";

export default (isValidCardOwner = true, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CARD_OWNER:
            const {isValidCardOwner} = payload;
            return isValidCardOwner;
    }

    return isValidCardOwner;
}
