import { useState } from "react";
import "./Chat_mainpage.css";


import Chat_Authentication from "../chat_authentication/Chat_Authentication";
import Chat_Chatpage from "../Chat_Chatpage/Chat_Chatpage";

const Chat_mainpage = () => {
    const [user, setUser] = useState(undefined);

  if (!user) {
    return <Chat_Authentication   onAuth={(user) => setUser(user)} />;
  } else {
    return <Chat_Chatpage user={user} />;
  }
}

export default Chat_mainpage