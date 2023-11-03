import React, { useState, FC } from 'react'

interface ProductItemProps {
    imageUrl: string,
    name: string,
    price: string
}

const ProductItem: FC<ProductItemProps> = ({ imageUrl, name, price }) => {
    const [isMouseOver, setMouseOver] = useState(false);

  return (
    <div className='product__item' onMouseEnter={()=>{setMouseOver(true)}} onMouseLeave={()=>{setMouseOver(false)}}>
        <img src={imageUrl} alt={name} />
        <p className='product__item__name'>{name}</p>
        <p className='product__item__price'>{price} $</p>
        {isMouseOver? <button className='add__to__cart__button'>ADD TO CART</button>: null}
    </div>
  )
}

export default ProductItem