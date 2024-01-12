import React from 'react';
import styled from "styled-components"
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";

function ChatEntrancer() {
    const[message, setMessage]=React.useState("");
  return (
    <Wrapper className="chat__entrancer">
        <IoMdClose className="close__entrancer"></IoMdClose>
        <div className="chat__entrance__header">
          <div className="img"></div>
          <p>Hey! If you have any questions, you can message me here. I'm usually online & will get back to you.</p>
        </div>
        <div className="chat__entrancer__content">
          <div>
            <input type="text" placeholder="Reply..." onChange={(e)=> setMessage(e.target.value)}></input>
         <button> <IoSendOutline></IoSendOutline></button>
          </div>
        </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 13.5rem;
  background: black;
  position: relative;
  margin-bottom: 5rem;

  .close__entrancer {
    position: absolute;
    font-size: 1.3rem;
    color: #fff;
    top: 0.4rem;
    right: 0.4rem;
  }

  .chat__entrance__header {
    display: flex;
    justify-content: space-between;
    background: black;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: 10rem;
    padding: 2rem;
  }

  .img {
    width: 50%;
    height: 60%;
    border-radius: 0.3rem;
    border: 1px solid red;
  }

  .chat__entrance__header p {
    margin: 0;
    color: #fff;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.3rem;
    margin-left: 0.6rem;
  }

  .chat__entrancer__content {
    width: 100%;
    height: auto;
    border-radius: 0rem 0rem 0.5rem 0.5rem !important;
  }

  .chat__entrancer__content div {
    width: 100%;
    height: 3.5rem;
    overflow-y: scroll;
    display: flex;
    align-items: center;
  }

  .chat__entrancer__content input {
    display: block;
    width: 240px;
    padding: 1rem 0.5rem;
    margin: 0;
    font-size: 1.2rem;
    border: none;
    outline: none;
  }

  .chat__entrancer__content button {
    display: flex;
    align-items: center;
    justify-content: center;
    display: block;
    width: 60px;
    height: 100%;
    font-size: 1.2rem;
    cursor: pointer;
    color: var(--clr-grey-6);
    transition: all 0.5s ease-in-out;
  }

  .chat__entrancer__content button:hover {
    color: black;
    font-size: 1.5rem;
  }
`;

export default ChatEntrancer;
