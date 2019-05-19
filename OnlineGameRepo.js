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

function canCreate(id) {
    let game = Games.get(id)
    return (game == undefined || game == null);
}

function canJoin(id) {
    console.log(id)
    let game = Games.get(id)
    if(game == null)
        return false;
    return !game.gameStarted
}

module.exports = {
    createGame,
    joinGame,
    canCreate,
    canJoin
}