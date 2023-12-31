import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaHandPointDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa"
import { FaTelegram } from "react-icons/fa";

//balls
const getSize = (px) => window.innerWidth * px;

const randomRangeExclusive = (min, max, excludeMin, excludeMax) => {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (randomNumber >= excludeMin && randomNumber <= excludeMax);
  return randomNumber;
};

function getRandomColor() {
  const colors = [
    "hsl(0, 0%, 50%)",
    "hsl(120, 90%, 70%)",
    "hsl(240, 90%, 70%)",
    "hsl(0, 90%, 70%)",
    "hsl(0, 0%, 100%)",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

class Ball {
  constructor(canvas) {
    this.canvas = canvas;
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.velX = randomRangeExclusive(-2, 2, -0.5, 0.5);
    this.velY = randomRangeExclusive(-2, 2, -0.5, 0.5);
    this.color = getRandomColor();
    this.radius = getSize(0.01);
  }

  draw(ctx) {
    if (this.radius > 0) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }
  }

  checkBombCollision(balls) {
    if (this.isBomb) {
      balls.forEach((ball) => {
        if (ball !== this && !ball.isBomb) {
          const dx = this.x - ball.x;
          const dy = this.y - ball.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < this.radius + ball.radius) {
            ball.makeBomb();
          }
        }
      });
    }
  }

  update() {
    if (this.isBomb) {
      this.bombTimer++;

      if (this.bombTimer < 60) {
        this.radius += getSize(0.05) / 60;
      } else if (this.bombTimer < 240) {
        // 
      } else if (this.bombTimer < 300) {
        this.radius -= 100 / 60;
      } else {
        this.radius = 0;
        this.isBomb = false;
        this.bomb = false;
      }
    } else {
      if (
        this.x + this.radius > this.canvas.width ||
        this.x - this.radius < 0
      ) {
        this.velX = -this.velX;
      }
      if (
        this.y + this.radius > this.canvas.height ||
        this.y - this.radius < 0
      ) {
        this.velY = -this.velY;
      }
      this.x += this.velX;
      this.y += this.velY;
    }
  }
}

const Contact = () => {
  const canvasRef = useRef(null);
  let balls = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      balls.forEach((ball) => {
        ball.x = Math.min(ball.x, canvas.width);
        ball.y = Math.min(ball.y, canvas.height);
      });
    };

    window.addEventListener("resize", handleResize);
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const init = () => {
      balls = [];
      for (let i = 0; i < 10; i++) {
        balls.push(new Ball(canvas));
      }
    };

    const loop = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = "overlay";

      for (let i = 0; i < balls.length; i++) {
        balls[i].checkBombCollision(balls);
      }

      balls = balls.filter((ball) => ball.radius > 0);
      balls.forEach((ball) => {
        ball.draw(ctx);
        ball.update();
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    init();
    loop();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  //form
  const[closeEnvelope, setCloseEnvelope]=useState(false);
  const[closeForm, setCloseForm]=useState(true);

  const[name, setName]=useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    email.preventDefault();
  }

  function openForm() {
    setCloseForm(!closeForm);
    setCloseEnvelope(!closeEnvelope);
    console.log("openForm")
  }

  function openEnvelope () {
    setCloseForm(!closeForm);
    setCloseEnvelope(!closeEnvelope);
  }

  return (
    <Wrapper className="section__center section page-100" id="contact">
      <div className="hello">
      <h2 className="title">Contact</h2>
        <p className="hello__1">Don't be shy! Hit me up!</p>
      </div>

      <canvas className="canvas" ref={canvasRef} />

      <BsFillEnvelopeOpenFill
        className={
          !closeEnvelope ? "icon__envelope" : "icon__envelope displayNone"
        }
        onClick={() => openForm()}
      ></BsFillEnvelopeOpenFill>

      <form
        className={closeForm ? "form displayNone" : "form"}
        action="https://formspree.io/f/mbjvoylv"
        method="POST"
      >
        <div className="btn__close">
          <IoMdClose
            className="btn__close__icon"
            onClick={() => openEnvelope()}
          ></IoMdClose>
        </div>
        <div className="personal__details">
          <div className="name">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your name..."
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="email">
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="Your e-mail..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
        </div>
        <div className="message">
          <label>Message</label>
          <textarea
            placeholder="Your message..."
            value={message}
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn__submit">
          <span>Submit</span>
          <IoIosArrowRoundForward></IoIosArrowRoundForward>
        </button>
      </form>

      <div className="footer">
        <div className="contact__icons__container">
          <span>E-mail: d_mihaela@msn.com</span>
                <a href="https://github.com/mdcodelab" className="git"><FaGithub></FaGithub></a>
                <a href="https://www.linkedin.com/in/mihaela-diaconu-5538a3204/" className="linkedin">in</a>
                <a href=""><FaTelegram></FaTelegram></a>
          
        </div>
        <hr className="hr"></hr>
        <div className="copyright">
          <p className="copyright__footer">
            &copy; {new Date().getFullYear()} <span>Mihaela Diaconu</span>. All Rights Reserved.</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  border: 3px solid red;

  .canvas {
    display: block;
    position: absolute;
    width: 100%;
    height: 70vh;
    z-index: 2;
  }

  .hello {
    position: absolute;
    top: 2.1rem;
    left: 50%;
    transform: translateX(-50%);
    letter-spacing: var(--spacing);
  }

  .hello__1,
  .hello__2 {
    margin: 0;
    padding: 0;
    color: var(--clr-grey-6);
    font-weight: bold;
    letter-spacing: 0.08rem;
  }

  .hello__2 {
    margin-top: 0.5rem;
    display: flex;
    align-items: center;
  }

  .hello__icon {
    display: block;
    margin-left: 0.5rem;
    cursor: pointer;
    font-size: 1.3rem;
    color: var(--clr-red-light-1);
    transition: all 0.7s ease-in-out;
  }

  .hello__icon:hover {
    transform: translateY(10px);
    color: var(--clr-grey-6);
  }

  .icon__envelope {
    display: flock;
    font-size: 11rem;
    position: absolute;
    top: 11rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 100;
    color: var(--clr-red-light-1);
    cursor: pointer;
    transition: all 0.7s ease-in-out;
    animation: expand 3s infinite;
  }

  @keyframes expand {
    0% {
      transform: translateX(-50%) scale(1);
    }
    50% {
      transform: translateX(-50%) scale(1.2);
    }
    100% {
      transform: translateX(-50%) scale(1);
    }
  }

  .icon__envelope:hover {
    color: var(--clr-grey-6);
  }

  .displayNone {
    display: none;
  }

  //form
  .form {
    width: 50%;
    height: 300px;
    position: absolute;
    z-index: 100;
    top: 7rem;
    left: 50%;
    padding: 0.5rem;
    transform: translateX(-50%);
    border: 0.08px solid var(--clr-grey-6);
    border-radius: 0.3rem;
    box-shadow: 0 1px 3px rgba(225, 255, 255, 0.12),
      0 1px 2px rgba(255, 255, 255, 0.24);
    background: var(--clr-navy-7);
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
  .email {
    width: 40%;
  }

  .name input,
  .email input {
    width: 100%;
    padding: 0.5rem 0;
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
  .email input,
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
  .email input::placeholder,
  .message textarea::placeholder {
    transition: color 0.7s ease-in-out;
  }

  .name input:hover::placeholder,
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
    background: var(--clr-red-light-1);
    color: var(--clr-navy-7);
    letter-spacing: 0.08rem;
    transition: all 0.7s ease-in-out;
  }

  .btn__submit:hover {
    color: var(--clr-grey-8);
    background: var(--clr-grey-1);
    border: 0.08rem solid var(--clr-grey-8);
  }

  @media (max-width: 700px) {
    label {
      font-size: 0.85rem;
    }
    input::placeholder,
    textarea::placeholder {
      font-size: 0.65rem;
    }
    .btn__submit {
      font-size: 0.85rem;
    }
    .hello__1 {
      font-size: 0.7rem;
      letter-spacing: none;
    }
    .title {
      font-size: 1.5rem;
    }
  }

  //footer
  .footer {
    width: 100%;
    height: 7rem;
    background: #222;
    position: absolute;
    bottom: 0;
    left: 0;
    margin-top: 2rem;
  }
  div.contact__icons__container {
    width: 24rem;
    height: max-content;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1rem auto;
  }

  .contact__icons__container span,
  .contact__icons__container a {
    display: block;
    color: var(--clr-grey-6);
  }

  .contact__icons__container span {
    color: var(--clr-green-light-1);
    cursor: pointer;
    font-size: 1rem;
  }

  .contact__icons__container a {
    display: block;
    font-size: 2rem;
    width: 2rem;
    height: 2rem;
    border-radius: 45%;
    color: var(--clr-grey-8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.7s ease-in-out;
  }

  a.linkedin {
    border-radius: 50%;
    width: 2.2rem;
    height: 2.2rem;
    color: #222;
    background: var(--clr-grey-8);
    font-size: 1.5rem;
    font-weight: bold;
    transition: all 0.7s ease-in-out;
  }

  .contact__icons__container a:hover {
    color: black;
    background: var(--clr-grey-8);
  }

  a.linkedin:hover {
    color: var(--clr-grey-8);
    background: #222;
    border: 0.08px solid var(--clr-grey-8);
  }

  //copyright
  .copyright {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .copyright p {
    font-size: 0.75rem;
    margin: 1rem auto;
    padding: 0;
    color: var(--clr-grey-8);
  }

  .copyright p span {
    font-family: "Open Sans", sans-serif;
    color: var(--clr-green-light-1);
    font-weight: bold;
  }

  .hr {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 700px) {
    div.contact__icons__container {
      width: 290px;
    }
    .contact__icons__container span {
      font-size: 0.85rem;
    }

    .contact__icons__container a {
      font-size: 1.5rem;
    }
  }
`;

export default Contact;
