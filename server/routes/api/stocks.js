const Items = require('./items');
const express = require('express');
const router = express.Router();

var items = new Items();

router.get('/', (req, res)=>{
    res.status(200).json(outputJsonOfStocks(getCurrentStocks));
});

function outputJsonOfStocks(getCurrentStocks){
    return {
      success: {
        stocks: getCurrentStocks()
      }
    };
  }
  
  function getCurrentStocks(){
    return items.getCurrentItemStock();
  }

  
  module.exports = router;