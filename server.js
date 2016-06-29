var express = require("express");
var path = require("path");
// create the express app
var app = express();
// require bodyParser since we need to handle post data for adding a user
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
// static content
app.use(express.static(path.join(__dirname, "./client/static")));


require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');

routes_setter(app);

var server = app.listen(8001, function() {
    console.log("listening on port 8001");
})

/****** variables *****/
var users = {};
var user_count = 0;
var messages = [];
/****** end vars *****/


// socket stuff
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    console.log('socket id: ',socket.id);

    // Listening:
    socket.on('got_new_user', function(data){
        console.log('new user name: ', data);
        user_count++;
        // users[socket.id] = {user_count: user_count, name: data.name};
        //
        // // users[socket.id] = data.name;
        // // users[user_count] = {name: data.name, id: socket.id}
        //
        // io.emit('new_user', {name: data.name, uId: socket.id, user_count: user_count});
        // socket.emit('existing_users', {existing_users: users, uID: socket.id});
        // io.emit('new_message_added', {messages: messages});
    });

    socket.on('new_message', function(data){
        messages.push(data);
        socket.emit('message_added');
        io.emit('new_message_added', {messages: messages});
    });

    // socket.on("disconnect", function(data){
    //     // console.log(socket.id);
    //     var sid = socket.id;
    //
    //     io.emit('disconnect_user', {disconnect_id: socket.id});
    //
    // })
    // app.io.route('got_new_user', function(req,res){
    //     app.io.broadcast('new_user', {new_user_name: req.data.name})
    //     req.io.emit('existing_user', users);
    // });

})
