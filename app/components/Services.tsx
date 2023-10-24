import React from 'react'

const Services = () => {
  return (
    <div className='services'>
        <div className='services__item'>
            <img className='services__img' src="/cart-icon.png" alt="cart-icon" />
            <div className='services__item__text'>
                <p className='services__heading'>FREE DELIVERY</p>
                <p className='services__text'>Consectetur adipi elit lorem ipsum dolor sit amet.</p>
            </div>
        </div>

        <div className='services__item'>
            <img className='services__img' src="/quality-icon.png" alt="" />
            <div className='services__item__text'>
                <p className='services__heading'>QUALITY GUARANTEE</p>
                <p className='services__text'>Dolor sit amet orem ipsu cons etect etur adipi elit.</p>
            </div>
        </div>

        <div className='services__item'>
            <img className='services__img' src="/price-icon.png" alt="" />
            <div className='services__item__text'>
                <p className='services__heading'>DAILY OFFERS</p>
                <p className='services__text'>Amet consectetur adipi elit loreme ipsum dolor sit.</p>  
            </div>
        </div>
    </div>
  )
}

export default Services