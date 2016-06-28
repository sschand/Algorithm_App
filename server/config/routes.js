var algorithms = require('../controllers/algorithms.js');
var users = require('../controllers/users.js');

module.exports= function(app){

    // Register user
    app.post('/newUser', function(req, res){
        users.createUser(req, res);
    });

}
