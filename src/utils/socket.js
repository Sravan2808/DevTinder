const Server = require("socket.io");

const initializeSocket = (httpServer) => {
  const io = new Server(httpServer, {
    cors: {
      origin: "http://localhost:5173",
      credentials: true,
    },
  });
  io.on("connection", (socket) => {

    socket.on("joinChat",()=>{})

    socket.on("sendMessage",()=>{})

    socket.on("disconnect",()=>{})
    
  });
};

module.exports = initializeSocket;
