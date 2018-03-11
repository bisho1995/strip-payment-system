const Items = require('./items');
const express = require('express');
const router = express.Router();

var items = new Items();

router.get('/', (req, res)=>{
    res.status(200).json(outputJsonOfStocks(getCurrentStocks));
});



/*
This function returns json output which should be sent to the client
@param getCurrentStocks - This is a function which
will give us the currently available stocks
*/
function outputJsonOfStocks(getCurrentStocks){
    return {
      success: {
        stocks: getCurrentStocks()
      }
    };
  }
  

/*
This functions gives us the current stocks.
*/
function getCurrentStocks(){
  return items.getCurrentItemStock();
}

  
  module.exports = router;