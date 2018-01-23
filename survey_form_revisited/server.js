let express = require('express');
let path = require("path");
const port = process.env.PORT || 8000
let app = express();

app.use(express.static(path.join(__dirname, 'client')))
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('index')
})

const server = app.listen(port, function(){  
})
const io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("Client/socket is connected!");
    socket.on('data', function(data){
        let random_num = Math.floor(Math.random() * 1000)+1
        data.random_num = random_num
        io.emit('updatePage', data);
    
      })    
});
