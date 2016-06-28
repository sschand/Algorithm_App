var mongoose = require('mongoose');
var Algorithm = mongoose.model('Algorithm');
module.exports = (function(){
  return {
  getArray: function(req,res){
    Algorithm.find({category: 'array'}, function(err,result){
      if(err){
        console.log("error in mongo was found: ", err);
      } else {
        //console.log(result);
        res.json(result);
      }
    })
  },

  getString: function(req,res){
    Algorithm.find({category: 'string'}, function(err,result){
      if(err){
        console.log("error in mongo was found: ", err);
      } else {
        res.json(result);
      }
    })
  },

  getSll: function(req,res){
    Algorithm.find({category: 'singly link list'}, function(err,result){
      if(err){
        console.log("error in mongo was found: ", err);
      } else {
        res.json(result);
      }
    })
  },

  getBst: function(req,res){
    Algorithm.find({category: 'binary search tree'}, function(err,result){
      if(err){
        console.log("error in mongo was found: ", err);
      } else {
        res.json(result);
      }
    })
  }










  }
})();
