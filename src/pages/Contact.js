import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { BsFillEnvelopeOpenFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaHandPointDown } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
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
  const[isFormOpen, setFormOpen]=useState(false);
  const[closeForm, setCloseForm]=useState(false);

  function openForm() {

  }

  return (
    <Wrapper className="section__center page-100" id="#contact">
      <div className="hello">
        <p className="hello__1">Don't be shy!</p>
        <p className="hello__2">
          <span>Hit me up! </span>
          <FaHandPointDown className="hello__icon"></FaHandPointDown>
        </p>
      </div>
      <canvas className="canvas" ref={canvasRef} />
      <BsFillEnvelopeOpenFill
        className="icon__envelope"
        onClick={() => openForm()}
      ></BsFillEnvelopeOpenFill>
      <form className="form">
        <div className="btn__close">
          <IoMdClose className="btn__close__icon"></IoMdClose>
        </div>
        <div className="name">
          <label>Name:</label>
          <input type="text"></input>
        </div>
        <div className="rmail">
          <label>E-mail:</label>
          <input type="email"></input>
        </div>
        <div className="message">
          <label>Your message:</label>
          <textarea></textarea>
        </div>
        <button type="submit"></button>
      </form>
      <div className="copyright">
        <div className="contact__icons">
          <span>Email: d_mihaela@msn.com</span>
            <a href="https://github.com/mdcodelab"><FaGithub></FaGithub></a>
            <a href=""><FaLinkedin></FaLinkedin></a>
            <a href=""><FaTelegram></FaTelegram></a>
        </div>
        <p style={{ color: "white" }}>
          &copy; {new Date().getFullYear()} <span>Mihaela Diaconu</span>. All
          Rights Reserved.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid red;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  .canvas {
    display: block;
    width: 100%;
    height: 70vh;
  }

  .hello {
    position: absolute;
    top: 2rem;
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
    transition: all 2s ease;
  }

  .hello__icon:hover {
    transform: translateY(10px);
    color: var(--clr-grey-6);
  }

  .icon__envelope {
    display: flock;
    font-size: 10rem;
    position: absolute;
    top: 9rem;
    left: 43.5%;
    z-index: 10;
    color: var(--clr-red-light-1);
    cursor: pointer;
    transition: all 2.5s ease;
    animation: expand 3s infinite;
  }

  @keyframes expand {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }

  .icon__envelope:hover {
    color: var(--clr-grey-6);
  }

  //form
  .form {
    width: 290px;
    height: 300px;
    border: 2px solid white;
    position: absolute;
    z-index: 2;
    top: 198px;
    left: 50%;
    transform: translateX(-50%);
    border: 0.08px solid var(--clr-grey-6);
    border-radius: 0.3rem;
    box-shadow: var(--light-shadow-2);
    display: none;
  }

  //icons
  .contact__icons {
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 20rem;
    border: 2px solid white;
  }

  //copyright
  .copyright {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
  }

  .copyright p {
    font-size: 0.85rem;
  }

  .copyright p span {
    font-family: "Open Sans", sans-serif;
    color: var(--clr-green-light-1);
    font-weight: bold;
  }
`;

export default Contact;
