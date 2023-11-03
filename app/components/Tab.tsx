import React, { useState, useEffect } from 'react';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Pagination from './Pagination';
import ProductItem from './ProductItem';

const Tab = () => {
  const [initialProductItem, setInitialProductItem] = useState([]);
  const [productItem, setProductItem] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(4);

  const lastProductIndex = currentPage * productsPerPage;
  const firstProductIndex = lastProductIndex - productsPerPage;
  const currentProduct = productItem.slice(firstProductIndex, lastProductIndex);

  useEffect(() => {
    const q = query(collection(db, 'products'));
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
        
        let productsArr: any[] = [];

        querySnapshot.forEach((doc) => {
            productsArr.push({...doc.data(), id: doc.id});
        })
        setInitialProductItem(productsArr);
        setProductItem(productsArr);
    });
  }, [])



  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  };

  const handleFilter = (category: string) => {
    setProductItem([...initialProductItem].filter(el => el.category === category));
    setCurrentPage(1);
  }

  return (
    <div className='tab'>

        <div className='tab__button__group'>
          <button className='tab__button' onClick={()=> {setProductItem(initialProductItem)}}>ALL</button>
          <button className='tab__button' onClick={()=> {handleFilter('TIN')}}>TIN</button>
          <button className='tab__button' onClick={()=> {handleFilter('CERAMIC')}}>CERAMIC</button>
          <button className='tab__button'onClick={()=> {handleFilter('DIFFUSERS')}}>DIFFUSERS</button>
        </div>

        
        <div className='tab__items'>
        {productItem.length > 0 ? 
          currentProduct.map(el => 
            <ProductItem key={el.id} imageUrl={el.imageUrl} name={el.name} price={el.price}/>            
          ) : null}


        </div>

        <Pagination ordersPerPage={productsPerPage} totalOrders={productItem.length} paginate={paginate} currentPage={currentPage}/>

        

    </div>
  )
}

export default Tab