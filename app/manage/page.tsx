'use client';
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Context } from '../context/context';
import { collection, query, onSnapshot, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../firebase';


const page = () => {
    const { isAdmin } = useContext(Context);
    const [productItem, setProductItem] = useState([]);
    const [initialProductItem, setInitialProductItem] = useState([]);

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
      }, []);

    const handleDelete = async (id:string) => {
        await deleteDoc(doc(db, "products", id));
    };

  return (
    <>
    <Navbar />
    <Menu />
    {isAdmin? 
        <div className='manage'>
            {productItem.length>0?
                productItem.map(el => 
                    <div key={el.id} className='manage__product'>
                        <img src={el.imageUrl} alt={el.name} />
                        <p>{el.name} <br /> {el.price} $</p>
                        <button onClick={()=>handleDelete(el.id)}>DELETE</button>
                    </div>
                )
                :
                null
            }

        </div>
        :
        <h2 className='account__h2'>This is a private route!</h2>
    }
    </>
  )
}

export default page