import React from "react";
import Chat_cover from "./Chat_cover";
import Chat_body from "./Chat_body";
import styled from "styled-components";

function Chat() {
  const [showChat, setShowChat] = React.useState(false);

  return <Wrapper className="chat_container">{showChat ? <Chat_body /> : <Chat_cover/>}</Wrapper>;
}

const Wrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  transition: all 0.7s ease;
`;

export default Chat;