'use client'
import React, { useContext } from 'react'
import { Context } from '../context/context'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'


const page = () => {
  const { 
    user,
    isAdmin,
    handleAdmin
  } = useContext(Context);


  return (
 
    <div>
      <Navbar />
      <Menu />
      {user? 
        (
          <div>
            <h2 className='account__h2'>
            Welcome, {user.email}!
            </h2>
            <button className={isAdmin? ('account__admin__view__button__on'):('account__admin__view__button')} onClick={handleAdmin}>ADMIN VIEW</button>

          </div>
        ):
        (
          <h2 className='account__h2'>This is a private rout!</h2>  
        )
      }
    </div>

  )
}

export default page