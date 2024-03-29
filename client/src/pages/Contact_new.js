import React from 'react';
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import FormComponent from '../components/FormComponent';

function Contact_new() {

const [formElements, setFormElements]=React.useState({
   name: "",
   surname: "",
   subject: "",
   email: "",
   message: "" 
});

const onChange = (e) => {
const {name, value}=e.target;
setFormElements(prevState => {
    return {...prevState, [name]: e.target.value}
})
}

const onSubmit = (e) => {
e.preventDefault();
console.log("submitted");
}

const[showForm, setShowForm]=
React.useState(localStorage.getItem("showForm") === "true" ? true : false)

const handleClick=() => {
    setShowForm(true);
    localStorage.setItem("showForm", "true");
}

React.useEffect(() => {
    if(showForm) {
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
      <FormComponent formElements={formElements} onSubmit={onSubmit} onChange={onChange}
        showForm={showForm}
      ></FormComponent>

      <div className="contact__container">
        <div className="contact__left">
          <p className="text__title" style={{ color: "#BA55D3" }}>Need a web developer?</p>
          <p className="text__title" style={{ color: "#BA55D3" }}>Let's build something.</p>
          <button type="button"
            className="btn__contact" onClick={() => handleClick()}>
            Get In Touch
          </button>
        </div>
        <div className="contact__right">
          <h5>
            +<a href="https://github.com/mdcodelab">GITHUB</a>
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

  .contact__container {
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 0 3rem;
  }

  .contact__right {
    width: 400px;
    max-width: 400px;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .contact__right h5 {
    cursor: pointer;
    font-size: 1.2rem;
    width: max-content;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
  }

  .contact__right h5 a {
    color: var(--clr-grey-8);
    display: block;
    position: relative;
    padding: 5px;
    letter-spacing: 0.09rem;
    transition: 0.5s;
    letter-spacing: 0.09rem;
    text-decoration: underline;
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

  .btn__contact {
    width: 10rem;
    height: 3rem;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.09rem;
    color: var(--clr-grey-8);
    border: 0.05rem solid var(--clr-grey-8);
    border-radius: 0.2rem;
    cursor: pointer;
    margin: 2.5rem auto;
    transition: all 0.3s ease-in-out;
  }

  @media only screen and (max-width: 700px) {
    .contact__right h5 a {
      font-size: 1.1rem;
    }
  }

  @media only screen and (max-width: 500px) {
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
    .contact__right h5 {
      font-size: 1rem;
    }
  }

  @media only screen and (max-width: 426px) {
    .contact__right {
        flex-direction: column;
        height: 8rem;
    }
  }
`;

export default Contact_new;
