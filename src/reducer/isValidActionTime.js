import {CHANGE_ACTION_TIME} from "../constants";

export default (isValidTime = false, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_ACTION_TIME:
            const {isValidActionTime} = payload;
            return isValidActionTime;
    }

    return isValidTime;
}
