const http = require("http");
const socketIo = reuire("socket.io");

const server = http.createServer(app);

const io = socketIo(server);

io.on("connection", (socket) => {
  console.log("New client connected");

  //Listen for 'message' event from any client
  socket.on("message", (msg) => {
    console.log("Message", msg);
    //Broadcasting message to all other clients
    io.emit("message", msg);
  });
  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
