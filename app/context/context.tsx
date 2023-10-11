'use client'
import React, { createContext, useState } from "react";

export const Context = createContext({modalActive: false, modalHandler: (isActive: boolean)=>{}});

export const ContextProvider = ({children}: any) => {
    //sign in modal window:
    const [modalActive, setModalActive] = useState(false);
    const modalHandler = (isActive: boolean) => {setModalActive(isActive)};
    //------------------------------------------------------------------------





    return (<Context.Provider value={{modalActive, modalHandler}}>{ children }</Context.Provider>)
}





