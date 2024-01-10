import React from 'react';
import { createContext } from 'react';

export const SidebarContext=createContext();


export const SidebarProvider = ({children}) => {
    const[isSidebar, setSidebar]=React.useState(false);

    return <SidebarContext.Provider 
    value={{
        isSidebar, 
        setSidebar}}>
        {children
        }
        
    </SidebarContext.Provider>
}


export const useGlobalContext = ()=> {
    return React.useContext(SidebarContext);
}
