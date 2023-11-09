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
    isAdmin: false,
    cart: [],
    handleAddToCart: (id: string, name: string, imageUrl: string, price: string): void => {},
    handleLocalStorageCart: (arr: []):void => {},
    handleIncrement: (id: string):void => {},
    handleDecrement: (id: string):void => {},
    handleDelete: (id: string):void => {},
    subtotal: 0,
    handleClearCart: ():void => {}
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
      const user = userCredential.user;
      setModalActive(false); 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
    }
    //------------------------------------------------------------------------

    //firebase function to sign out:
    const userSignOut = () => {
        signOut(auth).then(() => {
          setAdmin(false);
          }).catch((error) => {
            console.log(error);
          });
    }
    //------------------------------------------------------------------------

    //firebase function to sign in:
    const userSignIn = (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setModalActive(false);})
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setAuthError(errorMessage);
          console.log(errorMessage);});
    }
    //------------------------------------------------------------------------

    //state for shopping cart:
    const [cart, setCart] = useState([]);
    //------------------------------------------------------------------------
  
    //handler to add product to cart and set product to local storage :
    const handleAddToCart = (id: string, name: string, imageUrl: string, price: string) => {
      setCart([...cart, {id: id, name: name, imageUrl: imageUrl, price: price, quantity: 1}]);
      window.localStorage.setItem('cart', JSON.stringify([...cart, {id: id, name: name, imageUrl: imageUrl, price: price, quantity: 1}]));
    }
    //------------------------------------------------------------------------

    //handler to download cart from local storage:
    const handleLocalStorageCart = (arr: []) => {
      setCart(arr);
    }
    //------------------------------------------------------------------------

    //handler to increment product quantit in cart:
    const handleIncrement = (id:string) => {
      const index = cart.findIndex(el => el.id === id);
      const newCart = [...cart];
      newCart[index].quantity += 1;
      setCart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    }
    //------------------------------------------------------------------------

    //handler to decrement product quantit in cart:
    const handleDecrement = (id:string) => {
      const index = cart.findIndex(el => el.id === id);
      const newCart = [...cart];
      if (newCart[index].quantity > 1) {
      newCart[index].quantity -= 1;
      setCart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
      }
    }
    //------------------------------------------------------------------------
    
    //handler to delete product from cart:
    const handleDelete = (id:string) => {
      const newCart = cart.filter(el => el.id !== id);
      setCart(newCart);
      window.localStorage.setItem('cart', JSON.stringify(newCart));
    }
    //------------------------------------------------------------------------

    //handler to clear cart after order:
    const handleClearCart = () => {
      setCart([]);
      window.localStorage.setItem('cart', JSON.stringify([]));
    }
    //------------------------------------------------------------------------

    //state to calculate subtotal price:
    const [subtotal, setSubtotal] = useState(0);

    useEffect(() => {
      let subtotalPrice = 0;
      cart.map(el => {subtotalPrice += Number(el.price)*el.quantity});
      setSubtotal(subtotalPrice);
    }, [cart]);
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
        isAdmin,
        cart,
        handleAddToCart,
        handleLocalStorageCart,
        handleIncrement,
        handleDecrement,
        handleDelete,
        subtotal,
        handleClearCart
    }}>{ children }</Context.Provider>)
}





