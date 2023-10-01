import ChatBox from './components/chatbox'

function App() {
  return (
    <div className="container mx-auto bg-gray-100 rounded-xl shadow border p-8 m-10 flex-row">
      <p className="text-3xl text-gray-700 font-bold mb-5 text-center">
        Real-Time Chat By SmithDev!
      </p>
      <div className="flex">
        <div className="flex">
          <div className=" justify-center items-end pb-2 flex">
            <div className="relative">
              <img
                className="w-10 h-10 rounded-full"
                src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png"
                alt=""
              />
              <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
            </div>
          </div>
          <div className="p-2">
          <p className=" text-sm">Name</p>
            <div className="p-2 bg-white border-spacing-2 rounded-t-lg rounded-br-lg flex">
              <p>This Messages</p>
            </div>
          </div>
        </div>
      </div>
      <ChatBox />
    </div>
  );
}

export default App;
