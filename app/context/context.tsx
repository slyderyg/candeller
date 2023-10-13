'use client'
import React, { createContext, useState } from "react";

export const Context = createContext({
    modalActive: false, 
    modalHandler: (isActive: boolean)=>{},
    isSignIn: true,
    isSignInHandler: (isSignIn: boolean):void => {}
});

export const ContextProvider = ({children}: any) => {
    //modal window open/close state:
    const [modalActive, setModalActive] = useState(false);
    const modalHandler = (isActive: boolean):void => {setModalActive(isActive)};
    //------------------------------------------------------------------------

    //modal window sign up/sign in state:
    const [isSignIn, setIsSignIn] = useState(true);
    const isSignInHandler = (isSignIn: boolean):void => {setIsSignIn(isSignIn)};
    //------------------------------------------------------------------------



    return (<Context.Provider value={{
        modalActive, 
        modalHandler, 
        isSignIn, 
        isSignInHandler
    }}>{ children }</Context.Provider>)
}





