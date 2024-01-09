import React from 'react';
import styled from "styled-components"
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";

function ChatEntrancer() {
  return (
    <div className="chat__entrance">
        <div className="chat__entrance__header">
        <IoMdClose></IoMdClose>
          <div className="img"></div>
          <p>Hey! If you have any questions, you can message me here. I'm usually online & will get back to you.</p>
        </div>
        <div className="chat_entrance_content">
          <input></input>
          <IoSendOutline></IoSendOutline>
        </div>
    </div>
  );
}

export default ChatEntrancer;
