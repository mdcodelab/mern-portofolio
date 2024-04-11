import React from "react";
import { useRef } from "react";
import { IoChatbubbleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";
import { PiChatsCircleLight } from "react-icons/pi";
import axios from "axios";
import { useGlobalContext } from "../useContext";

function Chat({ setShowEn }) {
  const { isChat, setIsChat, message, setMessage } = useGlobalContext();

  const [allMessages, setAllMessages] = React.useState([]);

  //get all messages
  const getAllMessages = async () => {
    await axios
      .get("http://localhost:4000/api/v1")
      .then((response) => setAllMessages(response.data))
      .catch((error) => console.error(`There is an ${error}`));
  };

  React.useEffect(() => {
    getAllMessages();
    const interval = setInterval(getAllMessages, 2000);
    return () => clearInterval(interval);
  }, []);

  //create message
  const createMessage = async () => {
    try {
      const response = await axios.post("http://localhost:4000/api/v1", {
        content: message,
      });
      let messageCreated = response.data.message;
      if (messageCreated.content.charAt(0) === "9") {
        response.content.message = response.content.message.slice(1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //button
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      createMessage();
      setMessage("");
    }
  };

  const ref = useRef();
  const scrollToBottom = () => {
    ref.current.firstChild.scrollIntoView({
      block: "end",
    });
  };

  React.useEffect(() => {
    if (ref.current) scrollToBottom();
  }, [allMessages]);

  const handleClick = () => {
    createMessage();
    setMessage((prevState) => "");
  };

  const handleLauncher = () => {
    setIsChat(!isChat);
    setShowEn(false);
  };

  return isChat ? (
    <div className="room__container">
      <div className="chat__header">
        <h3>How Can I Help You?</h3>
        <IoMdClose className="icon__close" onClick={() => handleLauncher()} />
      </div>
      <div className="chat__body" ref={ref}>
        {allMessages.length > 0 ? (
          <div className="chat__body__content">
            {allMessages.map((message) => {
              const { _id, content, time, author } = message;
              return (
                <div key={_id} className="chat__message">
                  <p className="chat__content">
                    <strong>{author}:</strong> {content}
                  </p>
                  <p className="chat__time">{time}</p>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="body__empty">
            <PiChatsCircleLight
              style={{
                fontSize: "2rem",
                display: "block",
                margin: "0 auto",
                color: "var(--clr-grey-5)",
              }}
            />
            <p>
              Send a message, I'm usually able to get back to you in a few
              moments.
            </p>
          </div>
        )}
      </div>
      <div className="chat__submit">
        <input
          type="text"
          placeholder="Send a message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button type="submit" onClick={handleClick}>
          <IoSendOutline />
        </button>
      </div>
    </div>
  ) : (
    <div className="launcher__container" onClick={() => handleLauncher()}>
      <IoChatbubbleOutline
        className="icon__launcher"
        style={{ fontSize: "2.5rem", color: "var(--clr-grey-8)" }}
      />
    </div>
  );
}

export default Chat;
