const express = require('express');
const server = express();
server.use(express.json());

let dealership = [
    {brand: "Hyundai", model: "Veloster_N", year: 2020}
    ,{brand: "Volkswagen", model: "Golf_R", year: 2017}
    ,{brand: "Ford", model: "Focus_RS", year: 2018}
];

//Post: {brand: "Kia", model: "Stinger", year: 2019}
// server.post('/api/dealership/', function(req, res){
//     res.send(dealership);
// })


server.put('/api/dealership/:brand/:model', function(req,res){
    let result = dealership.find(function(val){
        return (val.brand === req.params.brand)
                 && (val.model === req.params.model);
    })
    if(!result){
        res.status(406).send('406 Forbidden');
    }else{
        result.year = req.body.year;
        res.send(result);
    }
})


server.delete('/api/dealership/:year/:brand/:model', function(req,res){
    let result = dealership.find(function(val){
        return (val.year === parseInt(req.params.year)) 
                && (val.brand === req.params.brand)
                 && (val.model === req.params.model);
    })
    if(!result){
        res.status(404).send('404 Entry Not Found');
    }else{
       dealership.splice(result,1); 
       res.send(dealership);
    }
})





server.post('/api/dealership/', function(req, res){
    if(isNaN(req.body.year) || req.body.model ==="Pinto"){
        res.status(406).send('406 Forbidden Post Request!');
    }else{
        const car = {//creating an object to add into our "database"
        brand: req.body.brand, 
        model: req.body.model,
        year: req.body.year
    }
    dealership.push(car);
    res.send(dealership);

    }

    
 })

server.get('/api/dealership/:year/:brand/:model', function(req,res){
    let result = dealership.find(function(val){
        return (val.year === parseInt(req.params.year)) 
                && (val.brand === req.params.brand)
                 && (val.model === req.params.model);
    })
    if(!result){
        res.status(404).send('404 Entry Not Found');
    }else{
        res.send("Results:" + result.year + ' ' +result.brand+ ' '+result.model);
    }
   })



   server.get('/api/dealership/', function(req,res){
        let dealershipString = '';
        for(let i =0; i<dealership.length;i++){
            dealershipString= dealershipString+ dealership[i].year + ' ' +dealership[i].brand+ ' '+dealership[i].model+'\n';
        }
        res.send(dealershipString);
  
})

server.listen(3000, ()=>{
    console.log("Connected to port 3000!");
});