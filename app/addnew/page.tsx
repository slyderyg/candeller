'use client'
import React, { useState, ChangeEvent, useRef } from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from 'uuid';



const page = () => {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [uploading, setUploading] = useState(false);
  const clearRef = useRef();

  const reset = () => {
        //@ts-ignore
    clearRef.current.value = "";
  };
  
  const handleProductName = (e:ChangeEvent<HTMLInputElement>):void => {
    setProductName(e.target.value)
  };

  const handleProductPrice = (e:ChangeEvent<HTMLInputElement>):void => {
      setProductPrice(e.target.value)
  };

  const handleProductDescription = (e:ChangeEvent<HTMLTextAreaElement>):void => {
    let inputValue = e.target.value;
    setProductDescription(inputValue);
  };

  const handleProductCategory = (e:ChangeEvent<HTMLInputElement>):void => {
    let inputValue = e.target.value;
    setProductCategory(inputValue)
  };

  const handleImageUpload = (e:ChangeEvent<HTMLInputElement>) => {
    setImageUpload(e.target.files[0])
  };

  const handleClick = () => {
    if (imageUpload == null || !productName || !productPrice || !productDescription) return;

    setUploading(true);

    async function newDoc() {
        try {
            const docRef = await addDoc(collection(db, "products"), {
                name: productName,
                price: productPrice,
                description: productDescription,
                category: productCategory,
                imageUrl: imageUrl,
                imageName: imageName
            });
        } catch (e) {
          console.error("Error adding document: ", e);
        }
    };
    
    let imageName = `images/${v4() + imageUpload.name}`;
    let imageUrl = '';
    const imageRef = ref(storage, imageName);
    
    uploadBytes(imageRef, imageUpload).then((snapshot) => {
        return (getDownloadURL(ref(storage, imageName)))
    }).then((url) => {
        imageUrl = url;
        newDoc();
        setUploading(false);
    });


    setProductName('');
    setProductPrice('');
    setProductDescription('');
    setProductCategory('');
    setImageUpload('');
    reset();
  }

  return (
    <>
    <Navbar />
    <Menu />
    <div  className='product__uploader'>
      <div className='form'>
        <div className='form__group'>
              <input className='form__input' type='text' placeholder='' value={productName} onChange={handleProductName}/>
              <label className='form__label' htmlFor="">PRODUCT NAME</label>
        </div>
        <div className='form__group'>
              <input className='form__input' type='number' placeholder='' value={productPrice} onChange={handleProductPrice}/>
              <label className='form__label' htmlFor="">PRICE $</label>
        </div>
        <div className='form__group'>
              <textarea className='form__input' placeholder='' value={productDescription} onChange={handleProductDescription}/>
              <label className='form__label' htmlFor="">DESCRIPTION</label>
        </div>
        <div className='form__group'>
              <input className='form__input' type='text' placeholder='' list='category' id='product-category' name='product-category' value={productCategory} onChange={handleProductCategory}/>
              <label className='form__label' htmlFor="product-category">CATEGORY</label>
              <datalist id='category'>
                <option value="TIN"/>
                <option value="CERAMIC"/>
                <option value="DIFFUSERS"/>
              </datalist>
        </div>
        <div className='form__group'>
              <input className='form__input' type='file' ref={clearRef} onChange={handleImageUpload}/>
        </div>
        <div className='button__group'>
        {uploading? (<div className='loading__icon'><img src="/loading-icon.gif" alt="...loading" /></div>):(
           <button className='form__button' onClick={handleClick}>+ UPLOAD</button>
        )}
       

        </div>
      </div>
    </div>
    </>
  )
}

export default page