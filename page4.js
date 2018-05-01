var socket = io();

var username = prompt('Choose a username: ');
socket.emit('new user', username);

socket.on('new message', function(msg) {
   // Display the message
   addMessage('<p><span class="username">' + msg.sender + ': </span>' + msg.message + '</p>');
});

socket.on('new user', function(username) {
   addMessage('<p class="join">' + username + ' has joined the room</p>');
});

socket.on('user left', function (username) {
   addMessage('<p class="leave">' + username + ' has left the room</p>');
})

//new message
function addMessage(msg) {
   var messages = document.getElementById('messages');
   
   messages.innerHTML += msg;
   
   messages.scrollTop = messages.scrollHeight;
}

function postMessage() {
   var textBox = document.getElementById('message');
    var msgToSend = {
    msg:textBox.value,
    user:username
}
   socket.emit('new message', {sender: username, message: textBox.value});
   textBox.value = '';
}