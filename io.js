const socketio = require('socket.io');
const gameRepo = require('./OnlineGameRepo')
let io;

function init(server) {
    io = socketio(server);
    io.on("connection", (socket) => {
        socket.on("create", (id) => {
            gameRepo.createGame(id, socket);
        })
        socket.on("join", (id) => {
            gameRepo.joinGame(id, socket);
        })
    })
}

module.exports = {init};