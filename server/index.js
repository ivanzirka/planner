
// Load the TCP Library
net = require('net');

const clients = [];

net.createServer(function (socket) {

  socket.name = socket.remoteAddress + ":" + socket.remotePort

  clients.push(socket);


  // setInterval(() => {
  //   socket.write("This message was sendet from server  \n");
  // }, 1500)

  console.log(')_@!_@__@_!#_!@_#_!@_', socket.write('hello'))
  socket.write("Welcome " + socket.name + "\n");

  // broadcast(socket.name + " joined the chat\n", socket);

  socket.on('data', function (data) {
    // socket.write(socket.name + "> " + data, socket);
  });

  // Remove the client from the list when it leaves
  socket.on('end', function () {
    // clients.splice(clients.indexOf(socket), 1);
    // socket.write(socket.name + " left the chat.\n");
  });

  // Send a message to all clients
  // function broadcast(message, sender) {
  //   clients.forEach(function (client) {
  //     if (client === sender) return;
  //     client.write(message);
  //   });
  //   process.stdout.write(message)
  // }

}).listen(5000);
