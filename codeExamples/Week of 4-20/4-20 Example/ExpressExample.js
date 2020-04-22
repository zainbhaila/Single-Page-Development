const express = require('express');
const server = express();


server.get('/greeting', function(req,res){
    res.send('HI');

})

server.listen(3000, ()=>{
    console.log("Connected to port 3000!");
});