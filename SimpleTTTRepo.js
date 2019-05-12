const SimpleTTT = require('./SimpleTTT')
const Games = new Map();

function createGame(socket) {
    const game = new SimpleTTT(socket)
    Games.set(socket.id, game);
    socket.on('disconnect', ()=>{
        Games.delete(socket.id);
    })
    game.start();
    console.log(`games len : ${Games.size}`)
}

module.exports = {
    createGame
}