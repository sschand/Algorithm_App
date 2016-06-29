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
var rooms = ['5774456df6dde4884200aff2', '5772e20bf6dde4884200afee'];
var user_count = 0;
var messages = [];
/****** end vars *****/


// socket stuff
var io = require('socket.io').listen(server);

io.sockets.on('connection', function(socket){
    // console.log( io.sockets.adapter.rooms);


    socket.messages = [];

    // Listening:
    socket.on('got_new_user', function(data){
        socket.username = data.name;
        socket.room = data.room;

        room = data.room;
        socket.join(data.room);
        user_count++;

    });

    socket.on('new_message', function(data){
        socket.emit('message_added');
        io.sockets.in(socket.room).emit('new_message_added', data);

    });
})
