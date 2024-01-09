import React from "react";
import ChatLauncher from "./ChatLauncher";
import ChatRoom from "./ChatRoom";
import styled from "styled-components";

function Chat() {
  const [showChat, setShowChat] = React.useState(false);

  return <Wrapper className="chat_container">{showChat ? <ChatRoom /> : <ChatLauncher/>}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.7s ease;
`;

export default Chat;