import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import AboutUs from '../components/AboutUs'
import Link from 'next/link'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <div className='about'>
        <img className='about__img' src="/about-us.png" alt="about-us picture" />
        <div className='about__text'>
          <span className='about__header'>WHO ARE WE</span>
          <span className='about__article'>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique facilisis consectetur at vivamus ut porta porta. Ut nisl, tortor, aliquam blandit vitae vehicula vivamus leo nullam urna, scelerisque unc lectus phasellus adipiscing arcu. Tristique facilisis nunc consectetur at tempor.</span>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default page