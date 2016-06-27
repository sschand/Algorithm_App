var mongoose = require('mongoose');

var algorithmSchema = new mongoose.Schema({
    algorithm: {type: String},
    solution: {type: String},
    expire_dt: {type: Date},
    users: [{type: mongoose.Schema.Types.ObjectId, ref: "Users"}],
    chat_id: {type: mongoose.Schema.Types.ObjectId, ref: "Chats"},
    category: {type: String}
    // name: {type: String},
    // posts: [{type: mongoose.Schema.Types.Mixed, ref: "Posts"}],
    // _topics: [{type: mongoose.Schema.Types.Mixed, ref: "Topics"}],
    // _comments: [{type: mongoose.Schema.Types.Mixed, ref: "Comments"}],
    // postPosted: Number,
    // topicsPosted: Number,
    // commentsPosted: Number
}, {timestamps: true})

// register schema as a model
var Algorithm = mongoose.model('User', algorithmSchema);
