var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get("/", function(req, res){
    res.sendFile(__dirname + '/chat.html');
})
io.on('connection', function(socket){
    socket.on('Joueur conecter', function(player){
        console.log('Mr '+player+' a rejoint le chat');
    })
    socket.on('Joueur deconecter', function(player){
        console.log('Mr '+player+' a quitté le chat');
    })

    socket.on('disconnect', function(){
        console.log('deconexion');
    })
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('chat message', msg);
    })
})
http.listen(3000, function(){
    console.log('listening on *:3000');
})