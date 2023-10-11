'use client';

import React from 'react';

const SignInForm = () => {
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

        <button className='form__button'>SIGN IN</button>

    </div>
  )
}

export default SignInForm