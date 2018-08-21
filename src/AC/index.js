import {CHANGE_CARD_NUMBER, CHANGE_PAY, CHANGE_ACTION_TIME, CHANGE_CARD_OWNER, CHANGE_CVV} from '../constants';


export function changePay(isValidAmount, amount) {
    return {
        type: CHANGE_PAY,
        payload: {
            isValidAmount,
            amount

        }
    }
}

export function changeCardNumber(isValidCardNumber, cardNumber) {
    return {
        type: CHANGE_CARD_NUMBER,
        payload: {
            isValidCardNumber,
            cardNumber
        }
    }
}



export function changeActionTime(isValidActionTime, actionTime) {
    console.log(isValidActionTime);
    return {
        type: CHANGE_ACTION_TIME,
        payload: {
            isValidActionTime,
            actionTime
        }
    }
}

export function changeCardOwner(isValidCardOwner, cardOwner) {
    return {
        type: CHANGE_CARD_OWNER,
        payload: {
            isValidCardOwner,
            cardOwner
        }
    }
}

export function changeCVV(isValidCVV, cvv) {
    return {
        type: CHANGE_CVV,
        payload: {
            isValidCVV,
            cvv
        }
    }
}




