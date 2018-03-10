const express = require('express');
const router = express.Router();

var stripe = require("stripe")("sk_test_BQokikJOvBiI2HlWgH4olfQ2");


var data = {
    token: "",
    orders: 0,
}

/*
This function sets the global variable data
@param token to set
@param orders to set
*/
function setStripeToken(token, orders){
    data.token = token;
    data.orders = orders;
}


router.post('/', (req, res)=>{
    setStripeToken( req.body.stripeToken, req.body.orders * 100 );

    stripe.charges.create({
        amount: data.orders ,
        currency: "usd",
        description: "Example charge",
        source: data.token,
      }, function(err, charge) {
        if( err ){
             res.json({ status: 'error1' });
        }
        else{
            if( charge.status === 'succeeded'){
                res.json({ status: 'success' });
            }
            else{
                res.json({ status: 'error2' });
            }
        }
      });
});


module.exports = router;