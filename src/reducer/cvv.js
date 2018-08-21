import {CHANGE_CVV} from "../constants";

export default (cvv = '', action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CVV:
            const {cvv} = payload;
            return cvv;
    }

    return cvv;
}
