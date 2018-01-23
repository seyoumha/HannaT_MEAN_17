const animals = require('../controllers/animals.js');

module.exports = function(app){
    app.get('/', function(req, res){
        animals.index(req, res)
    })
    app.get('/animals/:id', function(req, res){
        animals.show(req, res)
    })
    app.get('/new', function(req, res){
        res.render('new');
    })
    app.post('/animals', function(req, res){
        animals.create(req,res)
    })
    app.get('/animals/edit/:id', function(req, res){
        animals.edit(req, res)
    
    })
    app.post('/animals/:id', function(req, res){
        animals.update(req, res)
    })
    app.post('/animals/destroy/:id', function(req, res){
        animals.delete(req, res)
    })
}