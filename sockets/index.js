const statusEvents = require("./events/statusEvents");
const { Server } = require("socket.io");

const setupSocketServer = (server) => {
  const io = new Server(server, { cors: { origin: "http://localhost:3001" } });

  statusEvents(io);
};

module.exports = setupSocketServer;
