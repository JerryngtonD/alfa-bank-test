import {CHANGE_ACTION_TIME} from "../constants";

export default (cardTime = null, action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_ACTION_TIME:
            const {actionTime} = payload;
            return actionTime;
    }

    return cardTime;
}
