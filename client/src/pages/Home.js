import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../useContext';

//iconsimport { FaNodeJs } from "react-icons/fa";


const Home = () => {
  const {isSidebar}=useGlobalContext();
  return (
    <Wrapper className={!isSidebar ? "page-100 home__container section__center" : "hidden"} id="home">
      
    </Wrapper>
  );
}

const Wrapper = styled.div`
padding: 3rem;
height: 100vh;
background-color: var(--clr-navy-7);
border: 3px solid red;
`;

export default Home;
