import React from 'react';
import { Link } from "react-scroll";
import styled from "styled-components";

function Footer() {
    const [scroll, setScroll] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <Wrapper>
      <p className="footer">
            &copy; {new Date().getFullYear()} 
            <Link to="home" id="home" smooth={true} offset={-60}>Mihaela Diaconu</Link>. All
            Rights Reserved.</p>
    </Wrapper>
  );
}

const Wrapper=styled.div`
height: 5rem;
background: black;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

.footer {
    text-align: center;
    font-size:0.9rem;
    color: var(--clr-grey-8);
}

.footer a {
    color: var(--clr-green-light-1);
    cursor: pointer;
}
`;

export default Footer;
