'use client';

import React, { FC, useState, ChangeEvent, useContext } from 'react';
import { Context } from '../context/context';
import { useInput } from '../utils/useInput';

interface ModalProps {
  isSignInHandler: (isSignIn: boolean) => void;
}

const SignUpForm: FC<ModalProps> = ({ isSignInHandler }) => {

const { createUser } = useContext(Context);

const signUpEmail = useInput("", "email");
const signUpPassword = useInput("", "password");
const signUpPasswordRepeat = useInput("", "password");


const handleClick = (): void => {
  createUser(signUpEmail.value, signUpPassword.value);
  signUpEmail.setValue('');
  signUpPassword.setValue('');
  signUpPasswordRepeat.setValue('');
  signUpEmail.setDirty(false);
  signUpPassword.setDirty(false);
  signUpPasswordRepeat.setDirty(false);
}


  return (
    <div className='form'>

        <div className='form__group'>
            <input className='form__input' type='email' placeholder='' value={signUpEmail.value} onChange={signUpEmail.onChange} onBlur={signUpEmail.onBlur}/>
            <label className={signUpEmail.emailError? 'form__label__error' : 'form__label'} htmlFor="">{signUpEmail.emailError? (signUpEmail.emailError):('EMAIL')}</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signUpPassword.value} onChange={signUpPassword.onChange} onBlur={signUpPassword.onBlur}/>
            <label className={signUpPassword.passwordError? 'form__label__error' : 'form__label'} htmlFor="">{signUpPassword.passwordError? (signUpPassword.passwordError):('PASSWORD')}</label>
        </div>

        <div className='form__group'>
            <input className='form__input' type='password' placeholder='' value={signUpPasswordRepeat.value} onChange={signUpPasswordRepeat.onChange} onBlur={signUpPasswordRepeat.onBlur}/>
            <label className={(signUpPasswordRepeat.value !== signUpPassword.value)&&signUpPassword.isDirty? 'form__label__error' : 'form__label'} htmlFor="">{(signUpPasswordRepeat.value !== signUpPassword.value)&&signUpPassword.isDirty? ('password dismatch'):('REPEAT PASSWORD')}</label>
        </div>

        <div className='button__group'>
        <button className={signUpEmail.emailError || signUpPassword.passwordError || (signUpPasswordRepeat.value !== signUpPassword.value) || (signUpPassword.value.length<6)? 'form__button__error': 'form__button'} onClick={handleClick}>SIGN UP</button>
        <button className='form__reg__button' onClick={()=>{isSignInHandler(true)}}>SIGN IN</button>
        
        </div>
        
    </div>
  )
}

export default SignUpForm