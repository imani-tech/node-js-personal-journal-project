const events = require('events')
let eventEmitter = new events.EventEmitter();
eventEmitter.on('entrySaved', () => {
    console.log("Journal entry saved successfully!")
} )
eventEmitter.emit('entrySaved');

