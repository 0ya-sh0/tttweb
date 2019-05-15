const express = require('express');
const app = express();

app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.use(express.static(path.join(__dirname, '/public/build')))

module.exports = app;