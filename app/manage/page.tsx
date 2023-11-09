'use client';
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Context } from '../context/context';


const page = () => {
    const { isAdmin } = useContext(Context);

  return (
    <>
    <Navbar />
    <Menu />
    {isAdmin? 
        <div>
            
        </div>
        :
        <h2 className='account__h2'>This is a private route!</h2>
    
    }
    </>
  )
}

export default page