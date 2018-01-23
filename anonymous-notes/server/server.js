// Express
const express = require('express');
const app = express();

const path = require('path');

const cors = require('cors');
app.use(cors());

app.use(express.static(__dirname + '/angular-app/dist'));

const parser = require('body-parser');
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));




let morgan = require("morgan");
app.use(morgan('dev'));


//--------------Model-------------------

const uniqueValidator = require('mongoose-unique-validator');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/note-api');
mongoose.connection.on('connected', () => console.log('connected to MongoDB'));
mongoose.Promise = global.Promise;
const { Schema } = mongoose;
const noteSchema = new Schema({
  note: {
    type: String,
    trim: true,
    required: [true, 'Note title is required'],
    minlength: [3, 'Note title length must be greater than 3'],
    unique: true
  },
  
}, {
  timestamps: true
});
noteSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' });
const Note = mongoose.model('Note', noteSchema);

//-----------controller---------------

const noteController = {
    index: (request, response) => {
      Note.find({})
        .then(notes => response.json(notes))
        .catch(error => console.log(error));
    },
    create: (request, response) => {
      console.log('note', request.body.note)
  
      Note.create(request.body)
        .then(note => response.json(note))
        .catch(error => console.log(error));
    }
};

//----------Routes---------------
app
.get('/notes', noteController.index)
.post('/notes', noteController.create)

//-----------Server Listener---------------

const port = 5000;
app.listen(port, ()=> console.log(`Express server listening on port ${port}`));