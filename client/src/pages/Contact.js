import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import FormComponent from "../components/FormComponent";
import Balls from "../components/Balls";

function Contact() {
  const [formElements, setFormElements] = React.useState({
    name: "",
    surname: "",
    subject: "",
    email: "",
    message: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormElements((prevState) => {
      return { ...prevState, [name]: e.target.value };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  const [showForm, setShowForm] = React.useState(
    localStorage.getItem("showForm") === "true" ? true : false
  );

  const handleClick = () => {
    setShowForm(true);
    localStorage.setItem("showForm", "true");
  };

  React.useEffect(() => {
    if (showForm) {
      localStorage.setItem("showForm", "true");
    } else {
      localStorage.removeItem("showForm");
    }
  }, [showForm]);

  return (
    <Wrapper className="section__center" id="contact">
      <div className="section__header">
        <p className="section__name">Contact</p>
        <div className="hr" style={{ background: "#BA55D3" }}></div>
      </div>

      <FormComponent
        formElements={formElements}
        onSubmit={onSubmit}
        onChange={onChange}
        showForm={showForm}
      ></FormComponent>
      <div className="contact__container">
        <div className="contact__left">
          <p className="text__title" style={{ color: "#BA55D3" }}>
            Need a web developer?
          </p>
          <p className="text__title" style={{ color: "#BA55D3" }}>
            Let's build something.
          </p>
          <button
            type="button"
            className="btn__contact"
            onClick={() => handleClick()}
          >
            Get In Touch
          </button>
        </div>
        <div className="contact__right">
          <p>
            +<a href="https://github.com/mdcodelab">GITHUB</a>
          </p>
          <p>
            +{" "}
            <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/">
              LINKEDIN
            </a>
          </p>
          <p>
            + <a href="https://github.com/mdcodelab/react-portofolio">SOURCE</a>
          </p>
        </div>
      </div>
      <Balls></Balls>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr-navy-7);
  padding: 3rem;
  height: 100%;
  min-height: 100vh;
  position: relative;

  .contact__content {
    position: absolute;
    top: 3.5rem;
    z-index: 100;
  }

  .contact__container {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
    position: relative;
    z-index: 100;
    width: max-content;
    margin: 0 auto;
    margin-top: 3rem;
    background: var(--clr-navy-7);
  }

  .contact__left {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact__right {
    width: 400px;
    max-width: 400px;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contact__right p {
    cursor: pointer;
    font-size: 1rem;
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--clr-grey-8);
  }

  .contact__right p a {
    color: var(--clr-grey-8);
    display: block;
    position: relative;
    padding: 5px;
    letter-spacing: 0.09rem;
    transition: 0.5s;
    letter-spacing: 0.09rem;
    text-decoration: none;
  }

  .contact__right p a:hover {
    transform: scale(1.1);
    opacity: 1;
    filter: blur(0);
    color: #fff;
    border-radius: 0.3rem;
  }

  .contact__right p a:before {
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

  .contact__right p a:hover:before {
    transition: transform 0.5s;
    transform-origin: left;
    transform: scaleX(1);
    border-radius: 0.3rem;
  }

  @media only screen and (max-width: 700px) {
    .contact__container {
      padding: 2rem;
    }
    .contact__right p a {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 500px) {
    .contact__container {
      padding: 1rem;
    }
    .contact__left,
    .contact__right {
      width: 100%;
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
    .contact__right p {
      font-size: 0.9rem;
    }
    .contact__right p a {
      font-size: 0.9rem;
    }
  }

  @media only screen and (max-width: 426px) {
    .contact__right {
      flex-direction: column;
      height: 7.5rem;
    }
  }
`;

export default Contact;
