import Avatar from "../Avatar/Avatar";

const ChatContent = () => {
  return (
    <div className="flex p-3 flex-col">
      <div className="flex">
        <div className=" justify-center items-end pb-2 flex">
          <Avatar />
        </div>
        <div className="p-2">
          <p className=" text-sm">Smith</p>
          <div className="p-2 bg-yellow-400 text-slate-700 text-sm border-spacing-2 rounded-t-lg rounded-br-lg flex">
            <p>This Messages</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <div className="p-2">
          <div className="p-2 bg-yellow-400 text-slate-700 text-sm border-spacing-2 rounded-t-lg rounded-bl-lg flex">
            <p>This Messages</p>
          </div>
        </div>
        <div className=" justify-center items-end pb-2 flex">
          <Avatar image={"https://cdn.icon-icons.com/icons2/1371/PNG/512/batman_90804.png"}/>
        </div>
      </div>
    </div>
  );
};

export default ChatContent;
