import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Pagination from './Pagination';

const Tab = () => {
  const [productItem, setProductItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);


  useEffect(() => {
    const q = query(collection(db, 'products'));
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
        
        let productsArr: object[] = [];

        querySnapshot.forEach((doc) => {
            productsArr.push({...doc.data(), id: doc.id});
        })
       
        setProductItem(productsArr);
    });
}, [])

const lastProductIndex = currentPage * productsPerPage;
const firstProductIndex = lastProductIndex - productsPerPage;
const currentProduct = productItem.slice(firstProductIndex, lastProductIndex);

const paginate = (pageNumber: number) => {
  setCurrentPage(pageNumber)
};


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
        {productItem.length > 0 ? 
          currentProduct.map(el => 

            <div key={el.id} className='product__item'>
              <img src={el.imageUrl} alt={el.name} />
              <p className='product__item__name'>{el.name}</p>
              <p className='product__item__price'>{el.price} $</p>
            </div>
            
          ) : null}


        </div>

        <Pagination ordersPerPage={productsPerPage} totalOrders={productItem.length} paginate={paginate} currentPage={currentPage}/>

        

    </div>
  )
}

export default Tab