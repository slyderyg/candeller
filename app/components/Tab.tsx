import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';



const Tab = () => {
  const [productItem, setProductItem] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'products'));
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
        //@ts-ignore
        let productsArr = [];

        querySnapshot.forEach((doc) => {
            productsArr.push({...doc.data(), id: doc.id});
        })
       //@ts-ignore
        setProductItem(productsArr);
       //@ts-ignore
    });
}, [])


  return (
    <div className='tab'>

        <div className='tab__button__group'>
          <button className='tab__button'>ALL</button>
          <button className='tab__button'>3 WICK</button>
          <button className='tab__button'>TIN</button>
          <button className='tab__button'>CERAMIC</button>
          <button className='tab__button'>DIFFUSERS</button>
        </div>

        
        <div className='tab__items'>
        {productItem.map(el => 
          <div key={el.id} className='product__item'>
            <img src={el.imageUrl} alt={el.name} />
            <p className='product__item__name'>{el.name}</p>
            <p className='product__item__price'>{el.price} $</p>
          </div>
        )}


        </div>

        

    </div>
  )
}

export default Tab