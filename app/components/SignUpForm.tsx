'use client';

import React, { FC } from 'react';

interface ModalProps {
  isSignInHandler: (isSignIn: boolean) => void;
}

const SignUpForm: FC<ModalProps> = ({ isSignInHandler }) => {
  return (
    <div className='form'>

        <div className='form__group'>
            <input className='form__input' type='email' placeholder=''/>
            <label className='form__label' htmlFor="">EMAIL</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder=''/>
            <label className='form__label' htmlFor="">PASSWORD</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder=''/>
            <label className='form__label' htmlFor="">REPEAT PASSWORD</label>
        </div>

        <div className='button__group'>
        <button className='form__button'>SIGN UP</button>
        <button className='form__reg__button' onClick={()=>{isSignInHandler(true)}}>SIGN IN</button>
        </div>
    </div>
  )
}

export default SignUpForm