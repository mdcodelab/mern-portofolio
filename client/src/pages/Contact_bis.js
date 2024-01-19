import React from 'react';
import styled from "styled-components";
import { SlEnvelopeOpen } from "react-icons/sl";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";

function Contact_bis() {
const[closeForm, setCloseForm]=React.useState(true);
const[openEnvelope, setOpenEnvelope]=React.useState(true);

const[name, setName]=React.useState("");
const[surname, setSurname] = React.useState("");
const [subject, setSubject] = React.useState("");
const[email, setEmail] = React.useState("");
const[message, setMessage] = React.useState("");

function onEnvelope () {
setOpenEnvelope(!openEnvelope);
setCloseForm(!closeForm);
console.log("envelope clicked");
}
function handleSubmit (e){
e.preventDefault();
}


  return (
    <Wrapper className="section__center" id="contact">
      <div className="section__header">
            <h2 className="title">Contact</h2>
            <hr></hr>
      </div>
      <div className="contact__container">
        <div className="contact__left">
          <SlEnvelopeOpen
            className={`icon ${openEnvelope ? "" : "displayNone"}`}
            onClick={() => onEnvelope()}
          ></SlEnvelopeOpen>
          <form
            className={closeForm ? "form displayNone" : "form"}
            action="https://formspree.io/f/mbjvoylv"
            method="POST" onSubmit={()=>handleSubmit()}
          >
            <div className="btn__close">
              <IoMdClose
                className="btn__close__icon"
                onClick={() => onEnvelope()}
              ></IoMdClose>
            </div>
            <div className="personal__details">
              <div className="name">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Name..."
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                ></input>
              </div>
              <div className="surname">
                <label>Surname</label>
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname..."
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="personal__details">
              <div className="email">
                <label>E-mail</label>
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>
              <div className="subject">
                <label>Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                ></input>
              </div>
            </div>
            <div className="message">
              <label>Message</label>
              <textarea
                placeholder="Message..."
                value={message}
                name="message"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn__submit"
            >
              <span>Submit</span>
              <IoIosArrowRoundForward></IoIosArrowRoundForward>
            </button>
          </form>
        </div>
        <div className="contact__right">
          <h5>
            +
            <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/">
              GITHUB
            </a>
          </h5>
          <h5>
            +{" "}
            <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/">
              LINKEDIN
            </a>
          </h5>
          <h5>
            + <a href="https://github.com/mdcodelab/react-portofolio">SOURCE</a>
          </h5>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr-navy-7);
  padding: 3rem;

  .displayNone {
    display: none;
  }

  .contact__container {
    margin-top: 3rem;
    display: flex;
    height: 100%;
  }

  .contact__left {
    flex: 2;
  }

  .contact__right {
    flex: 1;
  }

  .contact__right h5 {
    text-align: center;
    cursor: pointer;
    font-size: 1.2rem;
    width: max-content;
    margin: 0 auto;
    display: flex;
    align-items: center;
    margin-bottom: 2rem;
  }

  .contact__right h5 a {
    color: var(--clr-grey-8);
    display: block;
    position: relative;
    padding: 5px;
    letter-spacing: 0.09rem;
    transition: 0.5s;
    letter-spacing: 0.09rem;
    text-decoration:underline;
  }

  .contact__right h5 a:hover {
    transform: scale(1.1);
    opacity: 1;
    filter: blur(0);
    color: #fff;
    border-radius: 0.3rem;
  }

  .contact__right h5 a:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr-grey-6);
    transition: 0.5s;
    transform-origin: right;
    transform: scaleX(0);
    z-index: -1;
    border-radius: 0.3rem;
  }

  .contact__right h5 a:hover:before {
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(1);
    border-radius: 0.3rem;
  }

  .icon {
    font-size: 3.5rem;
    color: var(--clr-grey-8);
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }

  .icon:hover {
    transform: scale(1.1);
    color: var(--clr-title);
  }

  //form
  .form {
    width: 100%;
    height: max-content;
    padding: 0.5rem;
    border: 0.08px solid var(--clr-grey-6);
    border-radius: 0.3rem;
    box-shadow: 0 1px 3px rgba(225, 255, 255, 0.12),
      0 1px 2px rgba(255, 255, 255, 0.24);
    background: var(--clr-navy-7);
    position: relative;
  }

  .btn__close__icon {
    font-size: 1.5rem;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    color: var(--clr-red-light-1);
    cursor: pointer;
    transition: scale 0.8s ease-in-out;
  }

  .btn__close__icon:hover {
    transform: scale(1.2);
  }

  .personal__details {
    display: flex;
    margin-top: 2rem;
    width: 100%;
    align-items: center;
    justify-content: space-evenly;
  }

  .name,
  .email,
  .surname,
  .subject {
    width: 40%;
  }

  .name input,
  .surname input,
  .subject input,
  .email input {
    width: 100%;
    padding: 0.5rem 0;
    background: var(--clr-navy-7);
  }

  .message {
    width: 90%;
    margin: 2rem auto !important;
  }

  .message textarea {
    width: 100%;
    height: 2rem;
  }

  .name input,
  .surname input,
  .email input,
  .subject input,
  .message textarea {
    border: none;
    outline: none;
    border-bottom: 1px solid var(--clr-grey-8);
    color: var(--clr-grey-8);
    color: var(--clr-light-blue-2);
    font-size: 1.1rem;
    letter-spacing: none;
    background: var(--clr-navy-7);
    transition: color 0.7s ease-in-out;
  }

  .name input::placeholder,
  .surname input::placeholder,
  .subject input::placeholder,
  .email input::placeholder,
  .message textarea::placeholder {
    transition: color 0.7s ease-in-out;
  }

  .name input:hover::placeholder,
  .surname input:hover::placeholder,
  .subject input:hover::placeholder,
  .email input:hover::placeholder,
  .message textarea:hover::placeholder {
    color: transparent;
  }

  .btn__submit {
    width: 8rem;
    height: 2rem;
    border: none;
    display: block;
    margin: 0 auto;
    border-radius: 4rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    cursor: pointer;
    font-size: 1rem;
    background: transparent;
    color: var(--clr-grey-8);
    border: 0.08rem solid var(--clr-grey-8);
    letter-spacing: 0.08rem;
    transition: all 0.7s ease-in-out;
  }

  .btn__submit:hover {
    color: var(--clr-grey-1);
    background: var(--clr-red-light-1);
    border: 0.08rem solid var(--clr-grey-1);
  }

  @media only screen and (max-width: 500px) {
    .contact__container {
      flex-direction: column;
    }
    .contact__left,
    .contact__right {
      width: 100%;
    }
    .icon {
    display: block;
    margin: 0 auto;
    }
    .contact__right {
      margin-top: 2rem;
    }
    label {
      font-size: 0.9rem;
    }
    input::placeholder {
      font-size: 0.9rem;
    }
    .contact__right h5 {
      font-size: 1rem;
    }
  }
`;

export default Contact_bis;
