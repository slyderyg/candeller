'use client';
import React, { FC } from 'react';

interface ModalProps {
    children: React.ReactNode;
    cartModalActive: boolean;
    cartModalHandler: (isActive: boolean) => void;
}

const CartModal: FC<ModalProps>= ({ cartModalActive, cartModalHandler, children }) => {

  return (
    <div className={cartModalActive? 'modal active' : 'modal'} onClick={() => cartModalHandler(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
        <div className='modal__xbutton__group'>
          <button className='modal__xbutton' onClick={() => cartModalHandler(false)}>🗙</button>
        </div>
          { children }
        </div>
    </div>
  )
}

export default CartModal