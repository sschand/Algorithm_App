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
        }
    }
})();
