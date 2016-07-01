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
<<<<<<< HEAD
                    console.log('added!!', result);
=======
>>>>>>> d6b8705203f36b91060668b65f2ae95de19857f3
                    res.json({added: 'added'});
                }
            })
        },
<<<<<<< HEAD

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
            var answer = req.body.solution;
            User.findOne({_id: req.body.user_id}, function(err, user){
                if(err){
                    console.log('something went wrong');
                } else {

                    console.log(user);
                    var algo ={algo_id:req.body.algo_id, solution:answer};
                    user.solution.push(algo)
                    user.save();
=======

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
            var answer = req.body.solution;
            User.findOne({_id: req.body.user_id}, function(err, user){
                if(err){
                    console.log('something went wrong');
                } else {
                    var algo ={algo_id:req.body.algo_id, solution:answer};
                    user.solution.push(algo)
                    user.save();
                    res.json(user);
>>>>>>> d6b8705203f36b91060668b65f2ae95de19857f3
                }
            })
        }
    }
})();
