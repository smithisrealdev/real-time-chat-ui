import Avatar from "../Avatar/Avatar";
import PropTypes from "prop-types";
import React from "react";
import { AppContext } from "../../App";
const ChatContent = ({ account }) => {
  const { msgData } = React.useContext(AppContext);
  let jsonData = "", jsonDataFirst;
  try {
    if (msgData !== "") {
      jsonDataFirst = JSON.parse(msgData);
      console.log("type :", typeof jsonDataFirst);
      jsonData = JSON.parse(jsonDataFirst);
      console.log("json :", jsonData);
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }
  return (
    <div className="flex p-3 flex-col">
      {
        jsonData !== "" && !jsonData.isChatOwner ? (
          <div className="flex">
            <div className="justify-center items-end pb-2 flex">
              <Avatar
                image={
                  account.type === "client"
                    ? account.imageServer
                    : account.imageClient
                }
              />
            </div>
            <div className="p-2">
              <p className="text-sm">{account.name}</p>
              <div className="p-2 bg-yellow-400 text-slate-700 text-sm border-spacing-2 rounded-t-lg rounded-br-lg flex">
                <p>{jsonData.text}</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="p-2">
              <div className="p-2 bg-yellow-400 text-slate-700 text-sm border-spacing-2 rounded-t-lg rounded-bl-lg flex">
                <p>{jsonData.text}</p>
              </div>
            </div>
            <div className="justify-center items-end pb-2 flex">
              <Avatar
                image={
                  account.type === "server"
                    ? account.imageServer
                    : account.imageClient
                }
              />
            </div>
          </div>
        )
      }
      

      
    </div>
  );
};

export default ChatContent;

ChatContent.propTypes = {
  account: PropTypes.shape({
    name: PropTypes.string.isRequired,
    messages: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    imageClient: PropTypes.string.isRequired,
    imageServer: PropTypes.string.isRequired,
  }).isRequired,
};
