//const EventEmitter = require('events');
const RaiseEvent = require('./raise');

const myEmitter = new RaiseEvent();

//on
myEmitter.on('Greeting', function(){
    console.log("I was just greeted!");
})

myEmitter.on('High Five', function(args){
    console.log(args);
})


myEmitter.raise();
