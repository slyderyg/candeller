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
import ReviewSlider from './components/ReviewSlider';
import Video from './components/Video';
import Footer from './components/Footer';

export default function Home() {

  return (
    <>
      <Navbar />
      <Menu /> 
      <Slider />
      <Services />
      <AboutUs />
      <Tab />
      <ReviewSlider />
      <Video />
      <Footer />
    </>
  )
}
