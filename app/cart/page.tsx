'use client';
import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Context } from '../context/context';

const page = () => {
    const { cart } = useContext(Context);

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
                        <button>+</button>
                        <input type="text" />
                        <button>-</button>
                    </div>

                </div>
            )}
        </div>

        <div className='cart__total'>
                <div className='cart__total__header'>Order summary</div>
                <div></div>
                <div className='cart__total__item'>Subtotal:</div>
                <div>4</div>
                <div className='cart__total__item'>Estimated shipping:</div>
                <div>6</div>
                <div className='cart__total__item'>Estimated total:</div>
                <div>8</div>
                <div>
                    <button className='checkout__button'>CHECKOUT</button>
                </div>
        </div>

    </div>
    </>
  )
}

export default page