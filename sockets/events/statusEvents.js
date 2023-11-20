const statusEvents = (io) => {
  io.on("connection", (socket) => {
    console.log("socket io connected");

    socket.on("chatMessage", (message) => {
      console.log("message: ", message);
    });
  });
};

module.exports = statusEvents;
