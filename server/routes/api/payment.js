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


function checkIfAllPostParamsArePresent(req){
    if(req.body.stripeToken && req.body.orders){
        return true;
    }
    return false;
}


/*
The / route and call back function
*/
router.post('/', (req, res)=>{
    

    if( checkIfAllPostParamsArePresent(req) === false){
        res.json({ status: 'error' });
    }
    else{
        setStripeToken( req.body.stripeToken, req.body.orders * 100 );
        /*
        Create a stripe charge, it needs amount,
        currency, description, source
        The source and amount is being delivered by the client
        */
        stripe.charges.create({
            amount: data.orders , /*some params which stripe needs*/
            currency: "usd",
            description: "Example charge",
            source: data.token,
          }, function(err, charge) {
            if( err ){
                 res.json({ status: 'error' });
            }
            else{
                if( charge.status === 'succeeded'){
                    res.json({ status: 'success' });
                }
                else{
                    res.json({ status: 'error' });
                }
            }
          });
    }




    
});


module.exports = router;