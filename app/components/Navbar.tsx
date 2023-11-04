'use client';
import React, { useContext, useEffect} from "react";
import { Context } from "../context/context";
import Link from "next/link";
import { navLinks } from "../utils/navLinks";
import { admLinks } from "../utils/admLinks";

const Navbar = () => {
    const { modalHandler, user, userSignOut, handleBurger, isAdmin, cart, handleLocalStorageCart } = useContext(Context);

    useEffect(()=>{
        const localStorageCart = JSON.parse(window.localStorage.getItem('cart'));
        window.localStorage.getItem('cart') && handleLocalStorageCart(localStorageCart)
    }, [])

  return (
    <header>
        <nav className="nav">

            <div className="nav__top">  

                <div className="logo">CANDELLER</div>

                <div className="burger">
                                <button className="burger__button" onClick={handleBurger}></button>
                </div>

                <div className="nav__top__right">

                    <ul>
                        {isAdmin? (null):(
                            <>
                                <li onClick={()=>(console.log('search button click'))}>SEARCH</li>
                                <li><Link className="nav__link" href="/cart">CART({cart.length})</Link></li>
                            </>
                        )}

                        {user? (
                            <>
                            <li><Link href="/account">ACCOUNT</Link></li>
                            <li onClick={userSignOut}>SIGN OUT</li>
                            </>
                        ):(
                            <li onClick={()=>modalHandler(true)}>SIGN IN</li>
                        )}
                        
                    </ul>
                </div>
                
            </div> 

            <div className="divider"></div>

            <div className="navbar">
                <ul>
                    {isAdmin? (admLinks.map(link => <li key={link.id}><Link className="navbar__link" href={link.href}>{link.name}</Link></li>)) :
                    (navLinks.map(link => <li key={link.id}><Link className="navbar__link" href={link.href}>{link.name}</Link></li>))}
                </ul>
            </div>

        </nav>
    </header>
  )
}

export default Navbar