import React from 'react';
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";
import { useGlobalContext } from '../useContext';

function ChatEntrancer({showEn, setShowEn}) {
    const{isChat, setIsChat}=useGlobalContext();
    
    function displayEntrancer () {
        setShowEn(false);
        //setIsChat(true);
    }

  return (
    <Wrapper
      className={`chat__entrancer ${!isChat ? "chat__entrancer" : ""}`}
      onClick={() => displayEntrancer()}
    >
      <IoMdClose className="close__entrancer"></IoMdClose>
      <div className="chat__entrance__header">
        <div className="img"></div>
        <p>
          Hey! If you have any questions, you can message me here. I'm usually
          online & will get back to you.
        </p>
      </div>
      <div className="chat__entrancer__content">
        <div>
          <input type="text" placeholder="Reply..."></input>
          <button>
            <IoSendOutline></IoSendOutline>
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 300px;
  height: 12rem;
  background: black;
  position: fixed;
  z-index: 200;
  right: -200px;
  bottom: 1.1rem;
  cursor: pointer;
  border-radius: 0.4rem;
  transition: all 0.7s linear;
  animation: showEn 1s linear forwards;

  @keyframes showEn {
    from {
      right: -200px;
    }
    to {
      right: 3rem;
    }
  }

  .close__entrancer {
    position: absolute;
    font-size: 1.1rem;
    color: #fff;
    top: 0.4rem;
    right: 0.4rem;
    cursor: pointer;
  }

  .chat__entrance__header {
    display: flex;
    justify-content: space-between;
    background: black;
    border-radius: 0.5rem 0.5rem 0 0;
    width: 100%;
    height: 9rem;
    padding: 1.2rem;
  }

  .img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.3rem;
    border: 1px solid red;
  }

  .chat__entrance__header p {
    flex: 1;
    margin: 0;
    color: #fff;
    text-align: justify;
    font-size: 1rem;
    line-height: 1.7rem;
    margin-left: 0.6rem;
  }

  .chat__entrancer__content {
    width: 100%;
    height: 3.5rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
  }

  .chat__entrancer__content div {
    width: 100%;
    height: 3rem;
    display: flex;
    align-items: center;
    border-radius: 0 0 0.3rem 0.3rem;
  }

  .chat__entrancer__content input {
    display: block;
    width: 240px;
    padding: 0.9rem 0.5rem;
    margin: 0;
    font-size: 1.1rem;
    border: none;
    outline: none;
    border-radius: 0 0 0 0.3rem;
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
    border: none;
    border-radius: 0 0 0.3rem 0;
    transition: all 0.5s ease-in-out;
  }

  .chat__entrancer__content button:hover {
    color: black;
    font-size: 1.5rem;
  }
`;

export default ChatEntrancer;
