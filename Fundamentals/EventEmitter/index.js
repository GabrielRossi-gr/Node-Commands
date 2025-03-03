const EventEmitter = require("events")
const eventEmitter = new EventEmitter()

//criar evento global
eventEmitter.on("start", () => {
    console.log("EVENTO")
})

console.log("Antes")

eventEmitter.emit("start")

console.log("Depois")