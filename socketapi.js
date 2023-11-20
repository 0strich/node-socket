const { Server } = require("socket.io")();
const io = new Server(server, {});
const socketapi = { io };

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("testMessage", (message) => {
    console.log("message: ", message);
  });

  setInterval(() => {
    socket.emit("chatMessage", "hello");
  }, 1000);
});

module.exports = socketapi;
