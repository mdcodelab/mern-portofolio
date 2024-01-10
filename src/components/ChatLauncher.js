import React from "react";
import styled from "styled-components";
import { IoChatbubbleOutline } from "react-icons/io5";


function ChatLauncher({showChat, setShowChat}) {
  return <Wrapper onClick={()=> setShowChat(!showChat)}>
    <IoChatbubbleOutline className="icon__launcher"></IoChatbubbleOutline>
  </Wrapper>;
}

const Wrapper = styled.div`
  width: 4rem;
  height: 3.3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  border-radius: 40%;
  transition: all 2s ease;

  .icon__launcher {
    color: var(--clr-red-light-1);
    font-size: 2.5rem;
  }
`;

export default ChatLauncher;
