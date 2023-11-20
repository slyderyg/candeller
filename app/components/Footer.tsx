import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='footer'>

        <div className="footer__top">
            <div className="footer__top__logo__info">
                <p className='footer__top__logo__info__header'>CANDELLER</p>
                <p className='footer__top__logo__info__text'>Nunc tristique facilisis consectetur vivamus ut porta porta aliquam vitae vehicula leo nullam urna lectus.</p>
            </div>

            <div className="footer__top__quick__links">
                <p className='footer__top__headers'>QUICK LINKS</p>
                <Link className='footer__link' href='/about'>ABOUT</Link>
                <Link className='footer__link' href='/shop'>SHOP</Link>
                <Link className='footer__link' href='/contact'>CONTACT</Link>
                <Link className='footer__link' href='/account'>ACCOUNT</Link>
            </div>

            <div className="footer__top__contact__info">
                <p className='footer__top__headers'>CONTACT INFO</p>
                <p className='footer__top__contact__info__text'>State Road 54 Trinity, Florida</p>
                <p className='footer__top__contact__info__text'>+31 22 33 235236</p>
                <p className='footer__top__contact__info__text'>info@yourinformation.com</p>
            </div>

            <div className="footer__top__social__info">
                <p className='footer__top__headers'>SOCIAL INFO</p>
                <p className='footer__top__contact__info__text'>You can follow us on our social platforms to get updates.</p>
                <div className='social__links'>
                    <a href=""><img src="/facebook-link.png" alt="" /></a>
                    <a href=""><img src="/instagram-link.png" alt="" /></a>
                    <a href=""><img src="/twitter-link.png" alt="" /></a>
                    <a href=""><img src="/linkedin-link.png" alt="" /></a>
                    <a href=""><img src="/youtube-link.png" alt="" /></a>
                </div>
            </div>
        </div>

        <div className="footer__bottom">
            <div className="footer__bottom__rectangle"></div>
            <div className='footer__bottom__frame'>
                <p>© Copyright 2023 Candeller.</p>
                <p>Design by <span>TemplatesJungle</span></p>
            </div>
        </div>

    </footer>
  )
}

export default Footer