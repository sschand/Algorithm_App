var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ChatSchema = new mongoose.Schema({
  chats: [{type: String, required:true}],
  chat_id: {type: Schema.Types.ObjectId, ref: "Chat"},
  algorithm_id: {type: Schema.Types.ObjectId, ref: "Algorithm"}
});

mongoose.model('Chat', ChatSchema);
