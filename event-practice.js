const events = require('events')
const fs = require('fs')
let eventEmitter = new events.EventEmitter();
fs.appendFile("journal.txt", 'Today I learned Node.js events!\n', (err) => {
    if(err){
        eventEmitter.emit('error', err)
        return
    }
})
eventEmitter.on('entrySaved', (data) => {
    console.log("Journal entry saved successfully!")
    console.log(data)
} )
eventEmitter.emit('entrySaved', 'File written successfully');

