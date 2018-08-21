import {CHANGE_CVV} from "../constants";

export default (isValidCVV = false, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CVV:
            const {isValidCVV} = payload;
            return isValidCVV;
    }

    return isValidCVV;
}
