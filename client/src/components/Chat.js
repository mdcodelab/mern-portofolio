import React from "react";
import {useRef} from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";
import { PiChatsCircleLight } from "react-icons/pi";
import axios from "axios";
import { useGlobalContext } from "../useContext";


function Chat() {
  const{isChat, setIsChat, message, setMessage} = useGlobalContext();

  const[allMessages, setAllMessages]=React.useState([]);

  //get all messages
    const getAllMessages = async ()=> {
    await axios.get("http://localhost:4000/api/v1").then(response => 
    setAllMessages(response.data)).catch(error => console.error(`There is an ${error}`));
  }

  React.useEffect(()=> {
    getAllMessages();
    const interval=setInterval(getAllMessages, 2000);
    return ()=> clearInterval(interval);
  }, []);


  //create message
  const createMessage = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1", {
        content: message
      });
      let messageCreated=response.data.message;
      if(messageCreated.content.charAt(0) === "9") {
        response.content.message = response.content.message.slice(1);
      }
    } catch (error) {
      console.log(error);
    }
  }

  //button
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createMessage();
      setMessage("");
    }
    //scrollToBottom();
  };


  const ref=useRef();
  React.useEffect(() => {
    console.log(ref);
  }, [])


  const handleClick = () => {
    createMessage();
    setMessage((prevState) => "");
    //scrollToBottom();
  }
  
  return isChat ? (
    <div className="room__container">
          <div className="chat__header">
        <h3>How Can I Help You?</h3>
        <IoMdClose style={{fontSize: "1.3rem"}} onClick={()=> setIsChat(!isChat)}></IoMdClose>
      </div>
      <div className="chat__body" ref={ref}>
        {allMessages.length > 0 ? (
          allMessages.map((message) => {
          const {_id, content, time, author}=message;
          return <div key={_id} className="chat__message">
            <p className="chat__content"><strong>{author}:</strong> {content}</p>
            <p className="chat__time">{time}</p>
          </div>
        })
        ) : (<div className="body__empty">
          <PiChatsCircleLight style={{fontSize: "2rem", display: "block", margin: "0 auto", color: "var(--clr-grey-5)"}}></PiChatsCircleLight>
          <p>Send a message, I'm usually able to get back to you in a few moments.</p>
        </div>)}
      </div>
      <div className="chat__submit">
        <input type="text" placeholder="Message..." value={message} 
        onChange={(e)=>setMessage(e.target.value)} onKeyPress={handleKeyPress}></input>
        <button type="submit" onClick={()=> handleClick()}>
        <IoSendOutline></IoSendOutline>
        </button>
      </div>
    </div>
  ) : (
    <div className="launcher__container" onClick={() => setIsChat(!isChat)}>
      <IoChatbubbleOutline className="icon__launcher" style={{fontSize: "2.5rem", color: "var(--clr-grey-8)"}}></IoChatbubbleOutline></div>
  );
}

export default Chat;
