import React, { useEffect, useRef } from "react";
import styled from "styled-components";

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

  return (
    <Wrapper className="section__center">
      <canvas ref={canvasRef} style={{ display: "block", width: "100%" }} />
    </Wrapper>
  );
};

const Wrapper = styled.div`

`;

export default Contact;
