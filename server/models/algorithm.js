var mongoose = require('mongoose');

var algorithmSchema = new mongoose.Schema({
    algorithm: {type: String},
    solution: {type: String},
    expire_dt: {type: Date},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "Users"}],
    chat_id: {type: mongoose.Schema.Types.ObjectId, ref: "Chats"},
    category: {type: String}
}, {timestamps: true})

// register schema as a model
var Algorithm = mongoose.model('User', algorithmSchema);
