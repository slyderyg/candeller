import React from 'react'
import { useInput } from '../utils/useInput'

const Newsletter = () => {
    const email = useInput("", "email");
    
    const handleClick = () => {
        email.setValue('');
        email.setDirty(false);
    }

  return (
    <div className='newsletter'>
        
        <div className='newsletter__subscribe'>
            <p>SUBSCRIBE TO OUR NEWSLETTER</p>
                <div className='newsletter__form'>
                    <div className='form__group'>
                        <input className='form__input newsletter__form__input' type='email' placeholder='' value={email.value} onChange={email.onChange} onBlur={email.onBlur}/>
                        <label className={email.emailError? 'form__label__error newsletter__form__input' : 'form__label newsletter__form__input'} htmlFor="">{email.emailError? (email.emailError):('Your email address here')}</label>
                        <button className='form__group__button' onClick={handleClick}>SUBSCRIBE</button>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Newsletter