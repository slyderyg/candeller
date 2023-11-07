'use client';
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Context } from '../context/context';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const page = () => {
    const { cart, handleIncrement, handleDecrement, handleDelete, subtotal } = useContext(Context);


    async function newDoc() {
        try {
            const docRef = await addDoc(collection(db, "activeOrders"), {
                data: JSON.stringify(cart)
            });
            //добавить очистку корзины
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    };


  return (
    <>
    <Navbar />
    <Menu />
    <div className='cart'>

        <div className='cart__list'>
            {cart.map(el => 
                <div className='cart__list__item' key={el.id}>

                    <img src={el.imageUrl} alt={el.name} />

                    <p>
                        {el.name}
                        <br />
                        {el.price} $
                    </p>

                    <div className='cart__list__item__quantity'>
                        <button onClick={() => handleIncrement(el.id)}>+</button>
                        <p>{el.quantity}</p>
                        <button onClick={() => handleDecrement(el.id)}>-</button>
                    </div>
                    <button className='cart__xbutton' onClick={() => {handleDelete(el.id)}}>🗙</button>
                </div>
            )}
        </div>

        <div className='cart__total'>
                <div className='cart__total__header'>Order summary</div>
                <div></div>
                <div className='cart__total__item'>Subtotal:</div>
                <div>{subtotal}</div>
                <div className='cart__total__item'>Estimated shipping:</div>
                <div>0 $</div>
                <div className='cart__total__item'>Estimated total:</div>
                <div>{subtotal}</div>
                <div>
                    <button className='checkout__button' onClick={newDoc}>CHECKOUT</button>
                </div>
        </div>

    </div>
    </>
  )
}

export default page