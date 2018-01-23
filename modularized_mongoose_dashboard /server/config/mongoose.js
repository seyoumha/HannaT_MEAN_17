const mongoose = require('mongoose');
const fs = require('fs');
var path = require('path');
mongoose.connect('mongodb://localhost/animals');
mongoose.connection.on('connected', () => console.log('connected to db'))
const models_path = path.join(__dirname, './../models');
fs.readdirSync(models_path).forEach(function(file){
    if(file.indexOf('.js')>0){
        require(models_path + '/' + file);
    }
});