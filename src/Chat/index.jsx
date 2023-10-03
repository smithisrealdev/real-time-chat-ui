import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatInputBox from "./ChatInputBox/ChatInputBox";
import React from "react";
const ChatApp = () => {
    React.useEffect(() => {
        const socket = new WebSocket("ws://127.0.0.1:8080/ws");
        console.log("Attempting Connection...");
    
        socket.onopen = () => {
          console.log("Successfully Connected");
          socket.send("Hi From the Client!");
        };
    
        socket.onclose = event => {
          console.log("Socket Closed Connection: ", event);
          socket.send("Client Closed!");
        };
    
        socket.onerror = error => {
          console.log("Socket Error: ", error);
        };
        
        // Cleanup the socket connection on unmount if necessary
        return () => {
          socket.close();
        };
    
      }, []); 
  return (
    <div className="max-w-sm mx-auto mt-32 ">
      <div className="bg-white border border-gray-200 rounded-lg shadow relative">
        <ChatHeader />
        <ChatContent />
        <ChatInputBox />
      </div>
    </div>
  );
};

export default ChatApp;
