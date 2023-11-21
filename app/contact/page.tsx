import React from 'react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <div className="contact__info">
                <p className='contact__info__headers'>CONTACT INFO</p>
                <p className='contact__info__text'>State Road 54 Trinity, Florida</p>
                <p className='contact__info__text'>+31 22 33 235236</p>
                <p className='contact__info__text'>info@yourinformation.com</p>
            </div>
    </div>
  )
}

export default page