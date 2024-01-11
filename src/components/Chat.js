import React from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";


function C() {
  const [isChat, setIsChat] = React.useState(false);
  const [message, setMessage] = React.useState("");

  return isChat ? (
    <div className="room__container">
          <div className="chat__header">
        <h3>How Can I Help You?</h3>
        <IoMdClose style={{fontSize: "1.3rem"}} onClick={()=> setIsChat(!isChat)}></IoMdClose>
      </div>
      <div className="chat__body">

      </div>
      <div className="chat__submit">
        <input type="text" placeholder="Message..." value={message} onChange={(e)=>setMessage(e.target.value)}></input>
        <button><IoSendOutline></IoSendOutline></button>
      </div>
    </div>
  ) : (
    <div className="launcher__container" onClick={() => setIsChat(!isChat)}>
      <IoChatbubbleOutline classNme="icon__launcher" style={{fontSize: "2.5rem", color: "var(--clr-red-light-1"}}></IoChatbubbleOutline></div>
  );
}

export default C;
