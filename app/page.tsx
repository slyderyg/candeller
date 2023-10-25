'use client';
import React, { useContext } from 'react';
import { Context } from './context/context';
import Image from 'next/image';
import styles from './page.module.css';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import SignInForm from './components/SignInForm';
import SignUpForm from './components/SignUpForm';
import Menu from './components/Menu';
import Slider from './components/Slider';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Tab from './components/Tab';

export default function Home() {

  const { 
    modalActive, 
    modalHandler, 
    isSignIn, 
    isSignInHandler 
  } = useContext(Context);

  return (
    <>
      <Modal modalActive={modalActive} modalHandler={modalHandler} isSignInHandler={isSignInHandler}>
        {isSignIn? 
          (<SignInForm isSignInHandler={isSignInHandler}/>):
          (<SignUpForm isSignInHandler={isSignInHandler}/>)
        }
      </Modal>
      <Navbar />
      <Menu /> 
      <Slider />
      <Services />
      <AboutUs />
      <Tab />
    </>
  )
}
