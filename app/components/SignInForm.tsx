'use client';

import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { Context } from '../context/context';
import { useInput } from '../utils/useInput';

interface ModalProps {
  isSignInHandler: (isSignIn: boolean) => void;
}

const SignInForm: FC<ModalProps> = ({ isSignInHandler }) => {

  const { userSignIn, authError } =useContext(Context);

  const signInEmail = useInput('', 'email');
  const signInPassword = useInput('', 'password');


  const handleClick = ():void => {
    userSignIn(signInEmail.value, signInPassword.value);
  }

  return (
    <div className='form'>

        <div className='form__group'>
            <input className='form__input' type='email' placeholder='' value={signInEmail.value} onChange={signInEmail.onChange} onBlur={signInEmail.onBlur}/>
            <label className={signInEmail.emailError? 'form__label__error' : 'form__label'} htmlFor="">{signInEmail.emailError? (signInEmail.emailError):('EMAIL')}</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signInPassword.value} onChange={signInPassword.onChange} onBlur={signInPassword.onBlur}/>
            <label className={signInPassword.passwordError? 'form__label__error' : 'form__label'} htmlFor="">{signInPassword.passwordError? (signInPassword.passwordError):('PASSWORD')}</label>
        </div>

        <div className='button__group'>
        <button className={signInEmail.value.length<1 || signInPassword.value.length<6 || signInEmail.emailError? 'form__button__error': 'form__button'} onClick={handleClick}>SIGN IN</button>
        <button className='form__reg__button' onClick={() =>{isSignInHandler(false)}}>SIGN UP</button>
        </div>

        <div className='form__signInError'>
          {authError}
        </div>

    </div>
  )
}

export default SignInForm