const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost/test';
mongoose.connect(dbURI);

let mongConn = mongoose.connection;

mongConn.on('error',(err)=>{
    console.log(err);
});

mongConn.once('open',()=>{
    console.log('successfully connected to mongodb');
});

module.exports = { mongoose };
