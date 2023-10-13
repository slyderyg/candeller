'use client';
import React, { FC } from 'react';

interface ModalProps {
    children: React.ReactNode;
    modalActive: boolean;
    modalHandler: (isActive: boolean) => void;
    isSignInHandler: (isSignIn: boolean) => void;
}

const Modal: FC<ModalProps>= ({ modalActive, modalHandler, children }) => {

  return (
    <div className={modalActive? 'modal active' : 'modal'} onClick={() => modalHandler(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
        <div className='modal__xbutton__group'>
          <button className='modal__xbutton' onClick={() => modalHandler(false)}>🗙</button>
        </div>
          { children }
        </div>
    </div>
  )
}

export default Modal
