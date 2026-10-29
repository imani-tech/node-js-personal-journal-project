const events = require('events')
const fs = require('fs')
let eventEmitter = new events.EventEmitter();
  eventEmitter.on('entrySaved', (data) => {  
    console.log('File written successfully')
    console.log(data)
} )
fs.appendFile("journal.txt", 'Today I learned Node.js events!\n', (err) => {
  
    if(err){
       console.log(err)
        return
    }
    eventEmitter.emit('entrySaved', 'Today I learned Node.js events!');
})



