var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
  return {

    // Create User
    createUser: function(req, res){
      var user = new User({name: req.body.name, email: req.body.email, password: req.body.password, algorithms: [] });
      user.save(function(err, result){
        if(err){
          console.log('something went wrong');
        }else {
          console.log('added!!', result);
          res.json({added: 'added'});
        }
      })
    },

    // Get User
    getUser: function(req, res){
      User.find({email: req.body.email, password: req.body.password}, function(err,result){
        if(err){
          console.log("Error finding user: ", err);
        } else {
          if(result.length == 0){
            res.json({login_error: 'Please check your login information and try again'});
          }else{
            res.json(result);
          }
        }
      });
  },

  checkalgo: function(req,res){
      console.log('algo is: ', req.body);
      User.findOne({_id: req.body.user_id}, function(err, user){
          if(err){
              console.log('something went wrong');
          } else {
              console.log(user);
              for(var i in user.algorithms){
                  if(user.algorithms[i] == req.body.algo_id){
                      user.algorithms[i] = {algo_id: req.body.algo_id, solution: req.body.solution};
                      user.save();
                      console.log('user uisssssssss: ',user);
                  }
              }

          }
      })
  }
  }
})();
