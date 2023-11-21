import React from 'react'
import Menu from '../components/Menu'
import Navbar from '../components/Navbar'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <div className='blog'>
      <div className='blog__posts'>
        <div className='blog__posts__article'>
          <img src="/post-item1.jpg" alt="" />
          <p className='blog__posts__article__date'>Feb 22, 2023 / Tips</p>
          <p className='blog__posts__article__title'>HOW CANDLE MAKES YOUR DAY</p>
        </div>
        <div className='blog__posts__article'>
          <img src="/post-item2.jpg" alt="" />
          <p className='blog__posts__article__date'>Feb 22, 2023 / Tips</p>
          <p className='blog__posts__article__title'>DARK CANDLE BENEFITS</p>
        </div>
        <div className='blog__posts__article'>
          <img src="/post-item3.jpg" alt="" />
          <p className='blog__posts__article__date'>Feb 25, 2023 / Tips</p>
          <p className='blog__posts__article__title'>CUTEST CANDLE IN THE WORLD</p>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default page