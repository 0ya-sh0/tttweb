const express = require('express');
const app = express();
const path = require('path')
const gameRepo = require('./OnlineGameRepo')

app.get('/app', (req, res)=>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
})

app.get('/app/*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
})

app.get('/', (req, res)=>{
    res.redirect('/app')
})

app.get('/api/canCreate/:id', (req, res) => {
    res.send({response: gameRepo.canCreate(req.params.id)})
})

app.get('/api/canJoin/:id', (req, res) => {
    res.send({response: gameRepo.canJoin(req.params.id)})
})

app.use(express.static(path.join(__dirname, '/frontend/build/')))

module.exports = app;