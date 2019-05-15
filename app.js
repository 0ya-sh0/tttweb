const express = require('express');
const app = express();
const path = require('path')

app.get('/app', (req, res)=>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
})

app.get('/app/*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/frontend/build/index.html'));
})

app.get('/', (req, res)=>{
    res.redirect('/app')
})

app.use(express.static(path.join(__dirname, '/frontend/build/')))

module.exports = app;