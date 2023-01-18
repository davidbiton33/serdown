var express = require('express');


var app = express();


app.use('/*', (req,res)=>{
    res.download('init_server_node_express_mongo.rar');
});

module.exports = app;
