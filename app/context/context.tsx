'use client'
import React, { createContext, useState } from "react";
import {auth} from '../firebase.js';
import { createUserWithEmailAndPassword, Auth, UserCredential } from "firebase/auth";


export const Context = createContext({
    modalActive: false, 
    modalHandler: (isActive: boolean)=>{},
    isSignIn: true,
    isSignInHandler: (isSignIn: boolean):void => {},
    createUser:  (email: string, password: string ): void => {}
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

    //firebase function to create user
    const createUser = (email: string, password: string ) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      setModalActive(false); 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
    }
    //------------------------------------------------------------------------


    return (<Context.Provider value={{
        modalActive, 
        modalHandler, 
        isSignIn, 
        isSignInHandler,
        createUser
    }}>{ children }</Context.Provider>)
}





