const express = require('express');
const path = require('path');
const port = process.env.PORT || 8000
let app = express();

app.use(express.static(path.join(__dirname, 'client')))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('index')
})

const server = app.listen(port, function(){})
const io = require('socket.io')(server)
io.on('connection', function(socket){
    socket.on('info', function(data){
        user = {user: data.user, msg: data.msg}
        io.emit('user', user)
    })

})