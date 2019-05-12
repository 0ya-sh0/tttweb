const socketio = require('socket.io');
let io;

function init(server) {
    io = socketio(server);
    io.on("connection", (socket)=>{
        const createGame = require('./SimpleTTTRepo').createGame
        socket.on("test", ()=>{
            createGame(socket);
        })
    })
}

module.exports = {init, io};