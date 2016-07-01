var mongoose = require('mongoose');
var Algorithm = mongoose.model('Algorithm');
var User = mongoose.model('User');

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
        },

        getAlgo: function(req, res){
            Algorithm.findOne({_id: req.body.id}, function(err,result){
                if(err){
                    console.log("error in mongo was found: ", err);
                } else {
                    res.json(result);
                }
            })
        },

        addUser: function(req, res){
            Algorithm.findOne({_id: req.body.id}, function(err, result){
                if(err){
                    console.log('error occured');
                }else {
                    if(result.users.length == 0){
                        result.users.push(req.body.user);
                        result.save();
                    } else {
                        for (var i of result.users){
                            if(i._id == req.body.user._id){
                                console.log('existed');
                            } else {
                                result.users.push(req.body.user);
                                result.save();
                            }

                        }
                        User.findOne({_id: req.body.user._id}, function(err, user){
                            if(err){
                                console.log('error occured');
                            }else {
                                var algo ={algo_id:req.body.id, solution:""};
                                if(user.algorithms.length == 0){
                                    user.algorithms.push(algo);
                                    user.save();
                                    res.json({user: user});
                                } else {
                                    for(var j of user.algorithms){
                                        if(j == req.body.id){
                                            console.log('algorithm existed');
                                        } else {
                                            var algo ={algo_id:req.body.id, solution:""};
                                            user.algorithms.push(algo);
                                            user.save();
                                            res.json({user: user});
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            });

        }


    }
})();
