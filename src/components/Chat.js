import React from "react";
import ChatLauncher from "./ChatLauncher";
import ChatRoom from "./ChatRoom";
import styled from "styled-components";

function Chat() {
  const [showChat, setShowChat] = React.useState(true);

  return (
    <Wrapper className="chat__container">
      {showChat && <ChatRoom setShowChat={setShowChat} showChat={showChat} />}
      {!showChat && <ChatLauncher setShowChat={setShowChat} showChat={showChat}/>}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 2s ease;
`;

export default Chat;