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
<<<<<<< HEAD
var rooms = ['5774456df6dde4884200aff2', '5772e20bf6dde4884200afee', '5774581af6dde4884200aff4', '57745838f6dde4884200aff5', '5774631ff6dde4884200aff8', '57746339f6dde4884200aff9'];
=======
var rooms = ['5774456df6dde4884200aff2', '5772e20bf6dde4884200afee','577454afe1d69d4762783f6d'];
>>>>>>> 3ef4f9a36424bb1424bf5f41db1652947c509666
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

            console.log('in server new message');
        // socket.emit('message_added', data);
        io.sockets.in(socket.room).emit('new_message_added', data);

    });
})
