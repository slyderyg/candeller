'use client'
import React, { useContext, useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { collection, query, where, onSnapshot, deleteDoc, doc, addDoc } from 'firebase/firestore';
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

      const handleDelete = async (id:string) => {
        await deleteDoc(doc(db, "activeOrders", id));
    };

    async function newDoc(user:string, data: any) {
        try {
            const docRef = await addDoc(collection(db, "completedOrders"), {
                user: user,
                data: data
            });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    };

  return (
    <>
    <Navbar />
    <Menu />
    {isAdmin? 
        <div className='active__orders'>
        {orders.map(el => <div className='active__orders__item' key={el.id}>
            <p className='active__orders__item__user'>Customer: {el.user}</p>
            <ul className='active__orders__item__list'>
                {el.data.map((e: any) => <li key={e.id}>{e.name} x {e.quantity}</li>)}
            </ul>
            <div className='active__orders__item__buttons'>
                <button className='active__orders__item__button' onClick={()=> {newDoc(el.user, el.data); handleDelete(el.id)}}>COMPLETED</button>
                <button className='active__orders__item__button' onClick={()=> handleDelete(el.id)}>DELETE</button>
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