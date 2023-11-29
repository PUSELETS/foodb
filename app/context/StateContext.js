"use client"
import React, { createContext, useContext, useState, useEffect } from 'react';

const Context = createContext();

export const StateContext = ({children}) =>{

    const [menu, setMenu] = useState(false);

    return(
        <Context.Provider
        value={{
            menu,
            setMenu
        }}
        >
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
