const mongoose = require('mongoose');
const AnimalSchema = new mongoose.Schema({
    name: {type: String, required: true}, 
    }, {timestamps: { createdAt: 'created_at' }
});
// register the schema as a model
mongoose.model('Animal', AnimalSchema);
const Animal = mongoose.model('Animal');
