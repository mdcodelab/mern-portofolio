import React from 'react';
import { createContext } from 'react';

export const AppContext=createContext();


export const AppProvider = ({children}) => {
    const[isSidebar, setSidebar]=React.useState(false);

    return <AppContext.Provider 
    value={{
        isSidebar, 
        setSidebar}}>
        {children
        }
        
    </AppContext.Provider>
}


export const useGlobalContext = ()=> {
    return React.useContext(AppContext);
}
