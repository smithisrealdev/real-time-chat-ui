import ChatContent from "./ChatContent/ChatContent";
import ChatHeader from "./ChatHeader/ChatHeader";
import ChatInputBox from "./ChatInputBox/ChatInputBox";

const ChatApp = () => {
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
