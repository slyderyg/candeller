import React from 'react'
import Link from 'next/link'
const AboutUs = () => {
  return (
    <div className='about'>
        <img className='about__img' src="/about-us.png" alt="about-us picture" />
        <div className='about__text'>
          <span className='about__header'>WHO ARE WE</span>
          <span className='about__article'>Et id sapien id enim, sit tempor cursus elit, fusce. Nunc tristique facilisis consectetur at vivamus ut porta porta. Ut nisl, tortor, aliquam blandit vitae vehicula vivamus leo nullam urna, scelerisque unc lectus phasellus adipiscing arcu. Tristique facilisis nunc consectetur at tempor.</span>
          <Link href='/about'>ABOUT US</Link>
        </div>
    </div>
  )
}

export default AboutUs