var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ChatSchema = new mongoose.Schema({
  chats: [{type: String, required:true}],
  algorithm_id: {type: Schema.Types.ObjectId, ref: "Algorithm"}
}, {timestamps: true});

mongoose.model('Chat', ChatSchema);

/***** Algorighm Schema *****/
var algorithmSchema = new mongoose.Schema({
    name: {type: String},
    algorithm: {type: String},
    solution: {type: String},
    expire_dt: {type: Date},
    users: [],
    chat_id: {type: mongoose.Schema.Types.ObjectId, ref: "Chat"},
    category: {type: String}
}, {timestamps: true})

// register schema as a model
mongoose.model('Algorithm', algorithmSchema);

/***** Users Schema *****/
var UsersSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    algorithms: [],
    solution: []
})

mongoose.model('User', UsersSchema);
