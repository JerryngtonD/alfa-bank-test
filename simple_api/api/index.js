let router = require('express').Router();
let mocks = require('./mock');


router.post('/user_buy', function (req, res, next) {
    let body = req.body;
    console.log(req.body);


    let order = {
        amount: body.pay,
        cvv: body.cvv,
        actionTime: body.actionTime,
        cardNumber: body.cardNumber,
        cardOwner: body.cardOwner,
        id: Date.now().toString(),
        dateOrder: new Date()
    };
    mocks.orders.push(order);

    res.json(order)
});

module.exports = router;
