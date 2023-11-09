'use client';
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Menu from '../components/Menu';
import { Context } from '../context/context';
import { collection, query, where, onSnapshot, deleteDoc, doc, addDoc } from 'firebase/firestore';
import { db } from '../firebase';


const page = () => {
    const { isAdmin } = useContext(Context);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'completedOrders'));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            
            let ordersArr: any[] = [];
    
            querySnapshot.forEach((doc) => {
                ordersArr.push({...doc.data(), id: doc.id});
            })
            setOrders(ordersArr);
        });
      }, [])

    const handleDelete = async (id:string) => {
        await deleteDoc(doc(db, "completedOrders", id));
    };
  return (
    <>
    <Navbar />
    <Menu />
    {isAdmin? 
        <div className='orders'>
        {orders.map(el => <div className='orders__item' key={el.id}>
            <p className='orders__item__user'>Customer: {el.user}</p>
            <ul className='orders__item__list'>
                {el.data.map((e: any) => <li key={e.id}>{e.name} x {e.quantity}</li>)}
            </ul>
            <div className='orders__item__buttons'>
                <button className='orders__item__button' onClick={()=> handleDelete(el.id)}>DELETE</button>
            </div>
        </div>)} 
        </div>
        :
        <h2 className='account__h2'>This is a private route!</h2>
    
    }
    </>
  )
}

export default page