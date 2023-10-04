const ConnectWebSocket = (msgData) => {
  const socket = new WebSocket("ws://127.0.0.1:8080/ws");
  console.log("Attempting Connection...");

  socket.onopen = () => {
    console.log("Successfully Connected");
    socket.send(JSON.stringify(msgData));
  };

  socket.onmessage = (event) => {
    var storedData = []
    storedData.push(JSON.stringify(event.data));
    localStorage.setItem("data", JSON.stringify(storedData));
  };

  socket.onclose = (event) => {
    console.log("Socket Closed Connection: ", event);
    socket.send("Client Closed!");
  };

  socket.onerror = (error) => {
    console.log("Socket Error: ", error);
  };

  return () => {
    socket.close();
  };
};

export default ConnectWebSocket;
