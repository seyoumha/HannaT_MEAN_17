const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000
let app = express();
let num = 0

app.use(express.static(path.join(__dirname, 'client')))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('index')
})

const server = app.listen(port, function(){})
const io = require('socket.io')(server)
io.on('connection', function(socket){
    console.log('Client/socket is connected')
    socket.on('btnClicked', function(data){
        num += 1
        io.emit('addingOne', num)
    })
    socket.on('reset', function(data){
        num = 0
        io.emit('addingOne', num)
    })
});