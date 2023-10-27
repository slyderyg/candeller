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
    userSignOut: ():void => {},
    userSignIn: (email: string, password: string ): void => {},
    authError: '',
    isBurgerMenuActive: false,
    handleBurger: ():void => {},
    handleAdmin: ():void => {},
    isAdmin: false
});

export const ContextProvider = ({children}: any) => {
    //state to checking currently signed-in user:
    const [user, setUser] = useState<User | null>(null);
    //------------------------------------------------------------------------
    
    //state to checking id user admin:
    const [isAdmin, setAdmin] = useState(false);
    const handleAdmin = () => {
      setAdmin(!isAdmin);
    }

    //------------------------------------------------------------------------
    //state to show sign in error message:
    const [authError, setAuthError] = useState('');
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

    //burger menu show/hide state:
    const [isBurgerMenuActive, setBurgerMenuActive] = useState(false);
    const handleBurger = ():void => {
      setBurgerMenuActive(!isBurgerMenuActive);
    }


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
      console.log(errorMessage);
      // ..
    });
    }
    //------------------------------------------------------------------------

    //firebase function to sign out:
    const userSignOut = () => {
        signOut(auth).then(() => {
          setAdmin(false);
          }).catch((error) => {
            // An error happened.
          });
    }
    //------------------------------------------------------------------------

    //firebase function to sign in:
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
    setAuthError(errorMessage);
    console.log(errorMessage);
  });
    }
    //------------------------------------------------------------------------

    return (<Context.Provider value={{
        modalActive, 
        modalHandler, 
        isSignIn, 
        isSignInHandler,
        createUser,
        user,
        userSignOut,
        userSignIn,
        authError,
        isBurgerMenuActive,
        handleBurger,
        handleAdmin,
        isAdmin
    }}>{ children }</Context.Provider>)
}





