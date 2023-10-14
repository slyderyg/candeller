'use client';

import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { Context } from '../context/context';

interface ModalProps {
  isSignInHandler: (isSignIn: boolean) => void;
}

const SignUpForm: FC<ModalProps> = ({ isSignInHandler }) => {

const { createUser } = useContext(Context);

const [signUpEmail, setSignUpEmail] = useState('');
const [signUpPassword, setSignUpPassword] = useState('');
const [signUpPasswordRepeat, setSignUpPasswordRepeat] = useState('');

const handleSignUpEmail = (e:ChangeEvent<HTMLInputElement>): void => {
  setSignUpEmail(e.target.value)
}

const handleSignUpPassword = (e:ChangeEvent<HTMLInputElement>): void => {
  setSignUpPassword(e.target.value)
}

const handleSignUpPasswordRepeat = (e:ChangeEvent<HTMLInputElement>): void => {
  setSignUpPasswordRepeat(e.target.value)
}

const handleClick = (): void => {
  signUpPassword === signUpPasswordRepeat ?  (createUser(signUpEmail, signUpPassword)) : (alert('passwords do not match'));
}


  return (
    <div className='form'>

        <div className='form__group'>
            <input className='form__input' type='email' placeholder='' value={signUpEmail} onChange={handleSignUpEmail}/>
            <label className='form__label' htmlFor="">EMAIL</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signUpPassword} onChange={handleSignUpPassword}/>
            <label className='form__label' htmlFor="">PASSWORD</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signUpPasswordRepeat} onChange={handleSignUpPasswordRepeat}/>
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