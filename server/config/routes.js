var algorithms = require('../controllers/algorithms.js');
var users = require('../controllers/users.js');

module.exports= function(app){
 app.get('/array', function(req,res){
    algorithms.getArray(req,res);
   });

 app.get('/string', function(req,res){
    algorithms.getString(req,res);
   });

 app.get('/sll', function(req,res){
    algorithms.getSll(req,res);
   });

 app.get('/bst', function(req,res){
    algorithms.getBst(req,res);
   });

    // Register user
    app.post('/newUser', function(req, res){
        users.createUser(req, res);
    });

    // Login user
    app.post('/getUser', function(req, res){
        users.getUser(req, res);
    });

}
