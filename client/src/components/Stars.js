import React, { useRef, useEffect } from "react";
import styled from "styled-components";

function Stars() {
  const wrapperRef = useRef(null);
  let sparkInterval;

  const spark = (e, opt_properties) => {
    let mouseX, mouseY;
    let event = e;
    if (!e) {
      event = wrapperRef.event;
    }
    if (event && (event.pageX || event.pageY)) {
      mouseX = event.pageX;
      mouseY = event.pageY;
    } else if (event && (event.clientX || event.clientY)) {
      mouseX = event.clientX + wrapperRef.current.scrollLeft;
      mouseY = event.clientY + wrapperRef.current.scrollTop;
    }
    const defaultProperties = {
      color: `random`,
      mouseX: mouseX,
      mouseY: mouseY,
      hw: 30,
      sparks: 8,
      sw: 8,
      time: 400,
    };
    const randInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    const c = Object.assign(defaultProperties, opt_properties);
    const col =
      c.color === "random"
        ? `rgb(${randInt(0, 255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`
        : c.color;
    const svg = wrapperRef.current.ownerDocument.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 100 100");
    svg.setAttribute(
      "style",
      `width: 100%; height: 100%; position: absolute; height: ${c.hw}px; width: ${c.hw}px; transform: translate(-50%,-50%); left: ${c.mouseX}px; top: ${c.mouseY}px; z-index: 99999`
    );
    for (let i = 0; i < c.sparks; i++) {
      svg.insertAdjacentHTML(
        "afterbegin",
        `<path d="M50 50 50 ${
          50 - c.sw / 2
        }" stroke="${col}" stroke-linecap="round" stroke-width="${
          c.sw
        }" fill="none" transform="rotate(${
          (360 / c.sparks) * i - 180 / c.sparks
        } 50 50)"><animate attributeName="d" values="M50 50 50 ${
          50 - c.sw / 2
        }; M50 ${50 - c.sw} 50 ${c.sw / 2}; M50 ${c.sw / 2} 50 ${
          c.sw / 2
        }" dur="${c.time}ms" begin="0s" repeatCount="0" fill="freeze" /></path>`
      );
    }
    wrapperRef.current.appendChild(svg);
    setTimeout(() => {
      svg?.remove();
    }, c.time);
  };

  useEffect(() => {
    const wrapper = wrapperRef.current;

    const handleClick = (event) => {
      spark(event, { color: "random", hw: 60 });
      clearInterval(sparkInterval);
    };

    const handleMouseMove = (event) => {
      spark(event, { color: "random" });
      clearInterval(sparkInterval);
    };

    const handleTouchMove = (event) => {
      const touch = event.touches[0];
      const x = touch.clientX;
      const y = touch.clientY;
      spark({ x, y }, { color: "random" });
      clearInterval(sparkInterval);
    };

    wrapper.addEventListener("click", handleClick);
    wrapper.addEventListener("mousemove", handleMouseMove);
    wrapper.addEventListener("touchmove", handleTouchMove);

    return () => {
      wrapper.removeEventListener("click", handleClick);
      wrapper.removeEventListener("mousemove", handleMouseMove);
      wrapper.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  function infiniteSparkle() {
    sparkInterval = setInterval(() => {
      const boundingBox = wrapperRef.current.getBoundingClientRect();
      spark(undefined, {
        color: "random",
        mouseX: boundingBox.left + window.scrollX,
        mouseY: boundingBox.top + window.scrollY,
      });
    }, 50);
  }

  useEffect(() => {
    infiniteSparkle();
    return () => {
      clearInterval(sparkInterval);
    };
  }, []);

  return (
    <Wrapper className="stars" ref={wrapperRef}>
      <svg
        className="motionSimulation"
        viewBox="0 0 200 100"
        preserveAspectRatio="none"
      >
        <circle className="getMe" r="0" fill="none">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            path="M20,50 C20,-50 180,150 180,50 C180-50 20,150 20,50 z"
          />
        </circle>
      </svg>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background: var(--clr--navy-7);
  overflow: hidden;
  width: 500px;
  height: 500px;
  border: 2px solid red;

  .motionSimulation {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
  }
`;

export default Stars;
