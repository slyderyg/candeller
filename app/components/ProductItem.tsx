'use client';
import React, { useState, FC, useContext } from 'react';
import { Context } from '../context/context';

interface ProductItemProps {
    imageUrl: string,
    name: string,
    price: string,
    id: string
}

const ProductItem: FC<ProductItemProps> = ({id, imageUrl, name, price }) => {
    const [isMouseOver, setMouseOver] = useState(false);
    const { handleAddToCart, cart } = useContext(Context);

  return (
    <div className='product__item' onMouseEnter={()=>{setMouseOver(true)}} onMouseLeave={()=>{setMouseOver(false)}}>
        <img src={imageUrl} alt={name} />
        <p className='product__item__name'>{name}</p>
        <p className='product__item__price'>{price} $</p>
        {isMouseOver && 
          (
            cart.findIndex(el => el.id === id) === -1 ? 
              <button className='add__to__cart__button' onClick={()=>{handleAddToCart(id, name, imageUrl, price)}}>ADD TO CART</button>
              : 
              <button className='add__to__cart__button'>GO TO CART</button>
          )
        }
    </div>
  )
}

export default ProductItem