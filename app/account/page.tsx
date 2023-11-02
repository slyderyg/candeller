'use client'
import React, { useContext } from 'react'
import { Context } from '../context/context'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import Modal from '../components/Modal'
import SignInForm from '../components/SignInForm'
import SignUpForm from '../components/SignUpForm'

const page = () => {
  const { 
    modalActive, 
    modalHandler, 
    isSignIn, 
    isSignInHandler,
    user,
    isAdmin,
    handleAdmin
  } = useContext(Context);


  return (
 
    <div>
      <Navbar />
      <Modal modalActive={modalActive} modalHandler={modalHandler} isSignInHandler={isSignInHandler}>
        {isSignIn? 
          (<SignInForm isSignInHandler={isSignInHandler}/>):
          (<SignUpForm isSignInHandler={isSignInHandler}/>)
        }
      </Modal>
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