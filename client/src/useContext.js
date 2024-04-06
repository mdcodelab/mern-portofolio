import React from 'react';
import { createContext } from 'react';

export const AppContext=createContext();


export const AppProvider = ({children}) => {
    const[isSidebar, setSidebar]=React.useState(false);
    const [isChat, setIsChat] = React.useState(false);
     const [message, setMessage] = React.useState("");

    return <AppContext.Provider 
    value={{
        isSidebar, 
        setSidebar,
        isChat,
        setIsChat,
        message,
        setMessage
        }}>
        {children
        }
        
    </AppContext.Provider>
}


export const useGlobalContext = ()=> {
    return React.useContext(AppContext);
}
