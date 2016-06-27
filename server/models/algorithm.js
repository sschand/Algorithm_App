var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ChatSchema = new mongoose.Schema({
  chats: [{type: String, required:true}],
  chat_id: {type: Schema.Types.ObjectId, ref: "Chat"},
  algorithm_id: {type: Schema.Types.ObjectId, ref: "Algorithm"}
});

mongoose.model('Chat', ChatSchema);

/***** Algorighm Schema *****/
var algorithmSchema = new mongoose.Schema({
    algorithm: {type: String},
    solution: {type: String},
    expire_dt: {type: Date},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "User"}],
    chat_id: {type: mongoose.Schema.Types.ObjectId, ref: "Chat"},
    category: {type: String}
}, {timestamps: true})

// register schema as a model
mongoose.model('Algorithm', algorithmSchema);
