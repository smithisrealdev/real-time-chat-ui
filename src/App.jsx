import Chat from "./Chat";
import React from "react";
import  {createContext } from "react";
export const AppContext = createContext(null);
function App() {

  const [msgData, setMsgData] = React.useState("");
  return (
    <AppContext.Provider value={{msgData, setMsgData}}>
      <Chat />
    </AppContext.Provider>
  );
}

export default App;
