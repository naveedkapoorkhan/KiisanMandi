import React from 'react';

import {
  MultiChatSocket,
  MultiChatWindow,
  useMultiChatLogic,
} from 'react-chat-engine-advanced';

const Chat_Chatpage = (props) => {
  const chatProps = useMultiChatLogic(
    
    '955f3ee3-03e1-4d4d-8058-fd01b62de255',
    props.user.username,
    props.user.secret
  );

  return (
    <div style={{height: '100vh'}}>
      <MultiChatWindow {...chatProps} style={{height: '100%'}}/>
      <MultiChatSocket {...chatProps} />
    </div>
  );
  };
  export default Chat_Chatpage;