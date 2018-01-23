let express = require('express');
let app = express();
let session = require('express-session');
let num_views = 0

app.use(session({secret: 'importsecretkey'}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.get('/', function(req, res){
    num_views += 1
    req.session.num_views = num_views;
    res.render('counter', {session: req.session})
})
app.post('/add_two', function(req, res){
    num_views += 1
    req.session.num_views = num_views;
    res.redirect('/')
})
app.post('/reset', function(req, res){
  num_views = 0
  req.session.num_views = num_views;
  res.redirect('/')
})

app.listen(5000, function(){
    
})