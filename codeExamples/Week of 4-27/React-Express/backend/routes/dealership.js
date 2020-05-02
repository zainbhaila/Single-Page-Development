var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');//*
const Data = require('./data');//*


const dbRoute =
    'mongodb+srv://dbUser:dbUserPassword@cluster0-d5ta5.mongodb.net/test?retryWrites=true&w=majority';//*
mongoose.connect(dbRoute, { useNewUrlParser: true });//*
let db = mongoose.connection;//*

db.once('open', () => console.log('connected to the database'));//*

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));//*


/* GET users listing. */
router.get('/', function (req, res, next) {
    Data.find(function(err,data){
        if(err){
            return res.json({success: false, error:err});
        }else{
            return res.json({success:true, info: data})
        }
    });
    
});

//Post handler
router.post('/', function (req, res, next) {
    let po = new Data();
    po.year = req.body.year;
    po.type = req.body.model;
    po.brand = req.body.brand;
    po.save((err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

router.delete('/', function (req, res, next) {
   Data.findOneAndRemove({year: req.body.year}, (err)=>{
    if (err) return res.json({ success: false, error: err });
   return res.json({ success: true });
   });

   
});




module.exports = router;
