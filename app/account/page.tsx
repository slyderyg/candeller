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
    handleAdmin
  } = useContext(Context);


  return (
    <>
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
          </div>
        ):
        (
          'You need to, sign in'
        )
      }
    </div>


      <h3 className='account__h3'>Admin view:</h3>

      <label className="switch">
        <input type="checkbox" onChange={handleAdmin}/>
        <span className="switch__slider round"></span>
      </label>

    </>
  )
}

export default page