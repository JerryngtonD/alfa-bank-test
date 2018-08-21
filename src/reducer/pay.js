import {CHANGE_PAY} from "../constants";

export default (amount = '', action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_PAY:
            const {amount} = payload;
            return amount;
    }

    return amount;
}
