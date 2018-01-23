const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
const path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');
//Routes
app.get('/', function(req, res){
    
    res.render('index');
})
app.post('/quotes', function(req, res){
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            res.render('index', {errors: quote.errors})
        } else{
            console.log('success');
            res.redirect('/quotes')
            
        }
    })
})
app.get('/quotes', function(req, res){
    Quote.find({}, function(err, quotes){
        res.render('quotes', {quotes: quotes})
    })
    
})

app.listen(8000, function(){
    console.log('listening on port 8000')
})

//mongoose

mongoose.connect('mongodb://localhost/quotes');
mongoose.connection.on('connected', () => console.log('connected to db'))
const QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    quote: {type: String, required: true}
}, {timestamps: { createdAt: 'created_at' }});
mongoose.model('Quote', QuoteSchema);
const Quote = mongoose.model('Quote');
