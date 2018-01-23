let express = require('express');
let app = express();
let session = require('express-session');
let bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());
app.use(express.urlencoded());
app.use(session({secret: 'importsecretkey'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    res.render('index')
})
app.post('/result', function(req, res){
    let user= [
        {name: req.body.name, loc: req.body.loc, lan: req.body.lan, comment: req.body.comment}
    ]
    req.session.user = user    
    res.render('result', {user: user})
})


app.listen(5000, function(){
    
})