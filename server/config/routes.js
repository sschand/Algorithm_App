var algorithms = require('../controllers/algorithms.js');
var users = require('../controllers/users.js');

module.exports= function(app){
 app.get('/array', function(req,res){
    user.getArray(req,res);
   });

 app.get('/string', function(req,res){
    user.getString(req,res);
   });

 app.get('/sll', function(req,res){
    user.getSll(req,res);
   });

 app.get('/bst', function(req,res){
    user.getBst(req,res);
   });

    // Register user
    app.post('/newUser', function(req, res){
        users.createUser(req, res);
    });

}
