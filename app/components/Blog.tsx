import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className='blog'>
      <div className='blog__title'>
        <p>BLOG POSTS</p>
        <Link href='/'>READ ARTICLES</Link>
      </div>
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
  )
}

export default Blog