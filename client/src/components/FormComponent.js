import React from 'react'
import styled from "styled-components";
import { IoIosArrowRoundForward } from "react-icons/io";

function FormComponent({formElements, onChange, onSubmit, showForm}) {

  return (
    <Wrapper className={!showForm ? "displayNone" : ""}>
      <p className="text__title text__primary" style={{ color: "#BA55D3" }}>
        Let's build a thing.
      </p>
      <form
        className="form"
        action="https://formspree.io/f/mbjvoylv"
        method="POST"
        onSubmit={() => onSubmit()}
      >
        <div className="personal__details">
          <div className="name">
            <label>Name</label>
            <input
              type="text"
              placeholder="Name..."
              value={formElements.name}
              name="name"
              required
              onChange={onChange}
            ></input>
          </div>
          <div className="surname">
            <label>Surname</label>
            <input
              type="text"
              name="surname"
              placeholder="Surname..."
              value={formElements.surname}
              required
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div className="personal__details">
          <div className="email">
            <label>E-mail</label>
            <input type="email" name="email" placeholder="E-mail..." value={formElements.email} required 
               onChange={onChange}></input>
          </div>
          <div className="subject">
            <label>Subject</label>
            <input type="text" name="subject" placeholder="Subject..." value={formElements.subject}
              onChange={onChange}
            ></input>
          </div>
        </div>
        <div className="message">
          <label>Message</label>
          <textarea
            placeholder="Message..."
            value={formElements.message}
            name="message"
            required
            onChange={onChange}
          ></textarea>
        </div>
        <button type="submit" className="btn__submit btn__contact">
          <div><span>SEND IT</span>
            <IoIosArrowRoundForward
              style={{ fontSize: "1.8rem" }}
            ></IoIosArrowRoundForward>
          </div>
        </button>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 2rem;

  .displayNone {
    display: none;
  }

  .text__primary {
    margin: 1.5rem 0;
  }

  .form {
    width: 100%;
    height: max-content;
    padding: 0.5rem;
    border: 0.08px solid var(--clr-grey-6) !important;
    border-radius: 0.3rem;
    box-shadow: 0 1px 3px rgba(225, 255, 255, 0.12),
      0 1px 2px rgba(255, 255, 255, 0.24);
    background: var(--clr-navy-7);
    position: relative;
    z-index: 100;
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

  .subject {
    margin-top: 2rem;
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
    color: #BA55D3;
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
    margin: 2rem auto;
    margin-bottom: 1.5rem;
  }

  .btn__submit span {
    display: block;
    margin-right: 0.5rem;
  }
`;

export default FormComponent
