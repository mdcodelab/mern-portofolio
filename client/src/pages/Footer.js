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
            <Link to="home" smooth={true} offset={-80}>
              <img src="assets/logo__footer.png" alt="logo"></img>
            </Link>. All
            Rights Reserved.</p>
    </Wrapper>
  );
}

const Wrapper=styled.footer`
height: 5rem;
background: black;
width: 100%;
display: flex;
align-items: center;
justify-content: center;

.footer {
    display: flex;
    align-items: center;
    width: 14rem;
    justify-content: space-between;
    font-size:0.9rem;
    color: var(--clr-grey-8);
}

.footer a {
    color: var(--clr-grey-8);
    cursor: pointer;
}
.footer a img {
  width: 1.5rem;
  height: 1.5rem;
}
`;

export default Footer;
