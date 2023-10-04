import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatInputBox from "./ChatInputBox/ChatInputBox";
import { useContext, useEffect } from "react";
import { AppContext } from "../App";
const mockClientData = {
  id: 2221,
  name: "James",
  imageClient: "",
  imageServer:
    "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png",
  type: "client",
  messages: 0,
};
const mockServerData = {
  id: 2222,
  name: "Smith",
  type: "server",
  imageClient: "",
  imageServer:
    "https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png",
  messages: 0,
};
const ChatApp = () => {
  const { setMsgData } = useContext(AppContext);
  useEffect(() => {
    setMsgData(localStorage.getItem("data"));
  }, []);
  return (
    <div className="flex min-[320px]:flex-col gap-10 min-[320px]:max-w-sm mx-auto min-[320px]:mt-8">
      <div>
        <p className=" text-5xl text-red-500 font-bold mb-2">User 1</p>
        <div className="bg-white border border-gray-200 rounded-lg shadow relative">
          <ChatHeader account={mockClientData} />
          <ChatContent account={mockClientData} />
          <ChatInputBox dataUser={mockClientData} />
        </div>
      </div>
      <div>
        <p className=" text-5xl text-green-500 font-bold mb-2">User 2</p>
        <div className="bg-white border border-gray-200 rounded-lg shadow relative">
          <ChatHeader account={mockServerData} />
          <ChatContent account={mockServerData} />
          <ChatInputBox dataUser={mockClientData} />
        </div>
      </div>
    </div>
  );
};

export default ChatApp;
