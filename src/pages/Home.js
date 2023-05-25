import React from 'react';
import Sidebar from '../components/Sidebar';
import styled from "styled-components";
import { useGlobalContext } from '../useContext';

const Home = () => {
  const {isSidebar, setSidebar}=useGlobalContext();
  return (
    <div className={!isSidebar ? "page section-center" : "hidden"} id="home">
      
    </div>
  );
}

export default Home;
