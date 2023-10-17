'use client';

import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { Context } from '../context/context';
import { useInput } from '../utils/useInput';

interface ModalProps {
  isSignInHandler: (isSignIn: boolean) => void;
}

const SignUpForm: FC<ModalProps> = ({ isSignInHandler }) => {

const { createUser } = useContext(Context);

const signUpEmail = useInput('');
const signUpPassword = useInput('');
const signUpPasswordRepeat = useInput('');


const handleClick = (): void => {
  createUser(signUpEmail.value, signUpPassword.value)
}


  return (
    <div className='form'>

        <div className='form__group'>
            <input className='form__input' type='email' placeholder='' value={signUpEmail.value} onChange={signUpEmail.handleInput}/>
            <label className='form__label' htmlFor="">EMAIL</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signUpPassword.value} onChange={signUpPassword.handleInput}/>
            <label className='form__label' htmlFor="">PASSWORD</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signUpPasswordRepeat.value} onChange={signUpPasswordRepeat.handleInput}/>
            <label className='form__label' htmlFor="">REPEAT PASSWORD</label>
        </div>

        <div className='button__group'>
        <button className='form__button' onClick={handleClick}>SIGN UP</button>
        <button className='form__reg__button' onClick={()=>{isSignInHandler(true)}}>SIGN IN</button>
        </div>
    </div>
  )
}

export default SignUpForm