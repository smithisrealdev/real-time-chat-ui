import DebouncedInput from "../../components/DebouncedInput";

function ChatInputBox() {
  return (
    <div className="px-6 py-3 bg-white w-100 overflow-hidden rounded-bl-xl rounded-br-xla">
      <div className="flex flex-row items-center space-x-5">
        <DebouncedInput />
        <button
          type="button"
          className="px-3 py-2 text-xs font-medium text-center text-slate-600 bg-yellow-200 rounded-lg hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-200 disabled:opacity-50"
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default ChatInputBox;
