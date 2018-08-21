import {CHANGE_CARD_OWNER} from "../constants";

export default (cardOwner = 'Ivan Ivanov', action) => {
    const {type, payload} = action;

    switch (type) {
        case CHANGE_CARD_OWNER:
            const {cardOwner} = payload;
            return cardOwner;
    }

    return cardOwner;
}
