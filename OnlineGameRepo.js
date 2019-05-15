const OnlineGame = require('./OnlineGame')

const Games = new Map();

function createGame(id, socket) {
    let game = Games.get(id);
    if(game != null)
        return;
    game = new OnlineGame(id, socket);
    Games.set(id, game);
    console.log(`games len : ${Games.size}`)
}

function joinGame(id, socket) {
    let game = Games.get(id);
    if(game == null)
        return;
    if(game.gameStarted)
        return;
    game.start(socket)
}

module.exports = {
    createGame,
    joinGame
}