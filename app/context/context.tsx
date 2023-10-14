'use client'
import React, { createContext, useState, useEffect } from "react";
import {auth} from '../firebase.js';
import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword } from "firebase/auth";
import { User } from "@firebase/auth/cordova";

export const Context = createContext({
    modalActive: false, 
    modalHandler: (isActive: boolean)=>{},
    isSignIn: true,
    isSignInHandler: (isSignIn: boolean):void => {},
    createUser:  (email: string, password: string ): void => {},
    user: null,
    userSignOut:():void => {},
    userSignIn: (email: string, password: string ): void => {}
});

export const ContextProvider = ({children}: any) => {
    //state for checking currently signed-in user:
    const [user, setUser] = useState<User | null>(null);
    //------------------------------------------------------------------------

    //Observer on the Auth object to get the current user:
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        })
        return () => unsubscribe();
    }, [user]);
    //------------------------------------------------------------------------

    //modal window open/close state:
    const [modalActive, setModalActive] = useState(false);
    const modalHandler = (isActive: boolean):void => {setModalActive(isActive)};
    //------------------------------------------------------------------------

    //modal window sign up/sign in state:
    const [isSignIn, setIsSignIn] = useState(true);
    const isSignInHandler = (isSignIn: boolean):void => {setIsSignIn(isSignIn)};
    //------------------------------------------------------------------------

    //firebase function to create user:
    const createUser = (email: string, password: string) => {
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

    //firebase function to sign out:
    const userSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          });
    }
    //------------------------------------------------------------------------

    const userSignIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        setModalActive(false);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    }


    return (<Context.Provider value={{
        modalActive, 
        modalHandler, 
        isSignIn, 
        isSignInHandler,
        createUser,
        user,
        userSignOut,
        userSignIn
    }}>{ children }</Context.Provider>)
}





