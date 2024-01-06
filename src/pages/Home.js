import React from 'react';
import styled from "styled-components";
import { useGlobalContext } from '../useContext';

//iconsimport { FaNodeJs } from "react-icons/fa";


const Home = () => {
  const {isSidebar}=useGlobalContext();
  return (
    <Wrapper className={!isSidebar ? "page section-center" : "hidden"} id="home">
      
    </Wrapper>
  );
}

const Wrapper = styled.div`

`;

export default Home;
