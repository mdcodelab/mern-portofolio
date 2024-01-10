import React from 'react';
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";


function ChatRoom({showChat, setShowChat}) {
  const[message, setMessage]=React.useState("");

  return (
    <Wrapper>
      <div className="chat__header">
        <h3>How Can I Help You?</h3>
        <IoMdClose style={{fontSize: "1.3rem"}} onClick={()=> setShowChat(!showChat)}></IoMdClose>
      </div>
      <div className="chat__body">

      </div>
      <div className="chat__submit">
        <input type="text" placeholder="Message..." value={message} onChange={(e)=>setMessage(e.target.value)}></input>
        <button><IoSendOutline></IoSendOutline></button>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 70vh;
  border-radius: 0.5rem;
  background: black;
  border: 1px solid var(--clr-grey-6);
  transition: all 2s ease;

  //header
  .chat__header {
    padding: 0.5rem;
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .chat__header h3 {
    margin: 0;
    padding: 0;
    font-size: 1.1rem;
    color: #fff;
  }

  .chat__header i {
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
  }

  //body
  .chat__body {
    height: calc(70vh - 3rem - 2.5rem);
    max-height: auto;
    background: #fff;
    overflow-y: scroll;
    border-bottom: 1px solid var(--clr-grey-6);
  }

  //submit
  .chat__submit {
    height: 2.5rem;
    background: #fff;
    border-radius: 0 0 0.5rem 0.5rem;
    display: flex;
  }

  .chat__submit input {
    border-radius: 0 0 0 0.5rem;
    border: none;
    outline: none;
    flex: 1;
    font-size: 1.1rem;
    padding: 0.5rem;
  }

  .chat__submit button {
    border-radius: 0 0 0.5rem 0;
    border: none;
    flex: 0.3;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    color: var(--clr-grey-6);
    cursor: pointer;
    transition: all 0.5s ease-in-out;
  }

  .chat__submit button:hover {
    color: black;
    font-size: 1.6rem;
  }
`;

export default ChatRoom;
