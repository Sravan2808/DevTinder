const Server = require("socket.io");
const crypto = require("crypto");

const getSecretRoomId = (userId,targetUserId)=>{
  return crypto
  .createHash("sha256")
  .update([userId,targetUserId].sort().join("_"))
  .digest("hex");
}

const initializeSocket = (httpServer) => {
  const io = Server(httpServer, {
    cors: {  
      origin: "http://localhost:5173",
      credentials: true,
    },
  });
  io.on("connection", (socket) => {

    socket.on("joinChat",({firstName,userId,targetUserId})=>{
      const roomId = getSecretRoomId(userId,targetUserId);
      console.log(firstName + " joined the chat" + roomId);

      socket.join(roomId);
    })

    socket.on("sendMessage",({firstName,userId,targetUserId,text})=>{
      const roomId = getSecretRoomId(userId,targetUserId);
      console.log(firstName + " sent a message to " + roomId + ": " + text);
      socket.to(roomId).emit("receiveMessage", {firstName,text});
    })

    socket.on("disconnect",()=>{})
    
  });
};

module.exports = initializeSocket;
