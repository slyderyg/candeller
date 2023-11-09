'use client'
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../firebase';
import Menu from '../components/Menu';
import { Context } from '../context/context';

const page = () => {
    const { isAdmin } = useContext(Context);
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const q = query(collection(db, 'activeOrders'));
        const unsubscribe = onSnapshot(q, (querySnapshot)=>{
            
            let ordersArr: any[] = [];
    
            querySnapshot.forEach((doc) => {
                ordersArr.push({...doc.data(), id: doc.id});
            })
            setOrders(ordersArr);
        });
      }, [])
  return (
    <>
    <Navbar />
    <Menu />
    {orders.map(el => <div key={el.id}>
        <h1>{el.user}</h1>
        {el.data.map((e: any) => <div key={e.id}>{e.name} x {e.quantity}</div>)}
    </div>)}
    </>
  )
}

export default page