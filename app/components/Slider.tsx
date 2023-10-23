import React, { useState } from 'react';


const Slider = () => {
  
  const yellow = {ref: "/yellow-candell.png", alt: 'yellow candell', color: 'YELLOW'};
  const black = {ref: "/black-candell.png", alt: 'black candell', color: 'BLACK'};
  const white = {ref: "/white-candell.png", alt: 'white candell', color: 'WHITE'};

  const [slide, setSlide] = useState(yellow);

  return (
    <div className='slider'>
        <img className='slider__img' src={slide.ref} alt={slide.alt} />
        <div className='slider__overlay'>
            <div className='slider__overlay__text'>
                {slide.color} <br /> CANDLE
                <button className='slider__overlay__button'>SHOP NOW</button>
            </div>
        </div>
        <div className='slider__radio__button__group'>
          <button className={slide.color === 'YELLOW'? 'slider__radio__button__active': 'slider__radio__button'} onClick={() => {setSlide(yellow)}}></button>
          <button className={slide.color === 'WHITE'? 'slider__radio__button__active': 'slider__radio__button'} onClick={() => {setSlide(white)}}></button>
          <button className={slide.color === 'BLACK'? 'slider__radio__button__active': 'slider__radio__button'} onClick={() => {setSlide(black)}}></button>
        </div>
    </div>
  )
}

export default Slider