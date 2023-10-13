'use client';

import React, { FC, useState, ChangeEvent } from 'react';

interface ModalProps {
  isSignInHandler: (isSignIn: boolean) => void;
}

const SignUpForm: FC<ModalProps> = ({ isSignInHandler }) => {

const [modalEmail, setModalEmail] = useState('');
const [modalPassword, setModalPassword] = useState('');
const [modalPasswordRepeat, setModalPasswordRepeat] = useState('');

const handleModalEmail = (e:ChangeEvent<HTMLInputElement>): void => {
  setModalEmail(e.target.value)
}

const handleModalPassword = (e:ChangeEvent<HTMLInputElement>): void => {
  setModalPassword(e.target.value)
}

const handleModalPasswordRepeat = (e:ChangeEvent<HTMLInputElement>): void => {
  setModalPasswordRepeat(e.target.value)
}



  return (
    <div className='form'>

        <div className='form__group'>
            <input className='form__input' type='email' placeholder='' value={modalEmail} onChange={handleModalEmail}/>
            <label className='form__label' htmlFor="">EMAIL</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={modalPassword} onChange={handleModalPassword}/>
            <label className='form__label' htmlFor="">PASSWORD</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={modalPasswordRepeat} onChange={handleModalPasswordRepeat}/>
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