const socketio = require('socket.io');
let io;

function init(server) {
    io = socketio(server);
    io.on("connection", (socket)=>{
        socket.on("test", ()=>{
            console.log("test received")
        })
    })
}

module.exports = {init, io};