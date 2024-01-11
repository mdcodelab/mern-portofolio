import React from 'react';

function Cl({showChat, setIsChat}) {
  return (
    <div className="cl__container" onClick={()=> setIsChat(!showChat)}>
      
    </div>
  );
}

export default Cl;
