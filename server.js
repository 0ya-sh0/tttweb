const app = require('./app');
const server = require('http').createServer(app);
const initSocketIo = require('./io').init;

initSocketIo(server);
server.listen(4200,()=>{
    console.log("server started")
});

module.exports = server;