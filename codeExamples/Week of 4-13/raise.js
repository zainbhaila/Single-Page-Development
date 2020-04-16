const EventEmitter = require('events');

class RaiseEvent extends EventEmitter{


    raise() {
        //emit events
        this.emit('Greeting');

        this.emit('High Five', "Down Low", "too slow");
    }
}


module.exports = RaiseEvent;
