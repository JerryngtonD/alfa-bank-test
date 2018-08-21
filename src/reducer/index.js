import {combineReducers} from 'redux';

import isValidPay from './isValidPay';
import isValidCardNumber from './isValidCardNumber';
import isValidActionTime from './isValidActionTime';
import isValidCardOwner from './isValidCardOwner';
import isValidCVV from './isValidCVV'

import actionTime from './actionTime';
import cardNumber from './cardNumber';
import cardOwner from './cardOwner';
import pay from './pay';
import cvv from './cvv';






export default combineReducers({
    isValidPay,
    isValidCardNumber,
    isValidActionTime,
    isValidCardOwner,
    isValidCVV,

    actionTime,
    cardNumber,
    cardOwner,
    pay,
    cvv
});

