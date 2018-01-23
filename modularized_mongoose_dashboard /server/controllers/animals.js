const mongoose = require('mongoose');
const Animal = mongoose.model('Animal');

module.exports={
    index: function(req, res){
        Animal.find({}, function(err, animals){
            res.render('index', {animals: animals});
        })
    },
    show: function(req, res){
        const id = req.params.id
        Animal.findById(id, function(err, animal){
            if(err){
                res.render('/', {errors: animal.errors})
            } else{
                res.render('animal', {animal: animal})
            }            
        })
    },
    create: function(req, res){
        var animal = new Animal({name: req.body.name});
        animal.save(function(err){
            if(err){
                res.render('new', {errors: animal.errors})
            } else{
                console.log('success');
                res.redirect('/')
            
            }
        })
    }, 
    edit: function(req, res){
        const id = req.params.id
        Animal.findById(id, function(err, animal){
            res.render('edit', {animal: animal});
        })
    },
    update: function(req, res){
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
    }, 
    delete: function(req, res){
        id = req.params.id
        Animal.findByIdAndRemove(id, function(err, animal){
            if(err){
                res.render('/', {errors: animal.errors})
            } else{
                console.log('success');
                res.redirect('/')   
            } 
        
        
        })
    }

}