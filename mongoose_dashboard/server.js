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
    Animal.find({}, function(err, animals){
        res.render('index', {animals: animals});
    })
    
})
app.get('/animals/:id', function(req, res){
    const id = req.params.id
    Animal.findById(id, function(err, animal){
        if(err){
            res.render('/', {errors: animal.errors})
        } else{
            res.render('animal', {animal: animal})
            
        }

    } )
})
app.get('/new', function(req, res){
    res.render('new');
})
app.post('/animals', function(req, res){
    var animal = new Animal({name: req.body.name});
    animal.save(function(err){
        if(err){
            res.render('new', {errors: animal.errors})
        } else{
            console.log('success');
            res.redirect('/')
            
        }
    })
})
app.get('/animals/edit/:id', function(req, res){
    const id = req.params.id
    Animal.findById(id, function(err, animal){
        res.render('edit', {animal: animal});
    })

})
app.post('/animals/:id', function(req, res){
    const id = req.body.id
    Animal.findById(id, function(err, animal){
        animal.name = req.body.name;
        animal.save(function(err){
            if(err){
                res.render('new', {errors: animal.errors})
            } else{
                console.log('success');
                res.redirect('/')   
            } 
        })
    
    })
})
app.post('/animals/destroy/:id', function(req, res){
    id = req.params.id
    Animal.findByIdAndRemove(id, function(err, animal){
        if(err){
            res.render('/', {errors: animal.errors})
        } else{
            console.log('success');
            res.redirect('/')   
        } 
        
        
        ;
    })
})


app.listen(8000, function(){
    console.log('listening on port 8000')
})

//mongoose

mongoose.connect('mongodb://localhost/animals');
mongoose.connection.on('connected', () => console.log('connected to db'))
const AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
}, {timestamps: { createdAt: 'created_at' }});
mongoose.model('Animal', AnimalSchema);
const Animal = mongoose.model('Animal');