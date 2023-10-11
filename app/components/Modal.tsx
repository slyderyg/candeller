'use client';
import React, { FC, useContext } from 'react';
import { Context } from '../context/context';

interface ModalProps {
    children: React.ReactNode;
}

const Modal: FC<ModalProps>= ({ children }) => {
  const { modalActive, modalHandler } = useContext(Context);

  return (
    <div className={modalActive? 'modal active' : 'modal'} onClick={() => modalHandler(false)}>
        <div className='modal__content' onClick={e => e.stopPropagation()}>
          { children }
        </div>
    </div>
  )
}

export default Modal
