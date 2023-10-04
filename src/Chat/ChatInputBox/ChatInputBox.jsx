import React from "react";
import DebouncedInput from "../../components/DebouncedInput";
import PropTypes from "prop-types";
import ConnectWebSocket from '../Configs/ConnectWebSocket';
import {AppContext} from '../../App'
import  { useContext } from "react";
function ChatInputBox({dataUser}) {
   const { setMsgData } = useContext(AppContext);
  const doSendMessage = () => {
    const dataMsg = {
      name: dataUser.name,
      text: newMessage,
      isChatOwner: dataUser.name === "Smith" ? false : true,
    }
    ConnectWebSocket(dataMsg)
    setMsgData(localStorage.getItem('data'))
  }
  const [newMessage, setNewMessage] = React.useState("");
  return (
    <div className="px-6 py-3 bg-white w-100 overflow-hidden rounded-bl-xl rounded-br-xla">
      <div className="flex flex-row items-center space-x-5">
        <DebouncedInput 
        value={newMessage ?? ""}
        onChange={(event) => setNewMessage(event)} />
        <button
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-slate-600 bg-yellow-200 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 disabled:opacity-50"
          onClick={() => doSendMessage()}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputBox;

ChatInputBox.propTypes = {
  dataUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};
