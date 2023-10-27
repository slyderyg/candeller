'use client';
import React, { useContext} from "react";
import { Context } from "../context/context";
import Link from "next/link";
import { navLinks } from "../utils/navLinks";
import { admLinks } from "../utils/admLinks";

const Menu = () => {
    const { modalHandler, user, userSignOut, isBurgerMenuActive, handleBurger,isAdmin } = useContext(Context);

  return (
    <div className={isBurgerMenuActive? 'menu' :'menu__disabled'}>
        <div className="blur">
            <div className="menu__content">
                    <ul>
                        {isAdmin? (null):(
                            <>
                                <li onClick={()=>(console.log('search button click'))}>SEARCH</li>
                                <li><Link href="/">CART(0)</Link></li>
                            </>
                        )}

                        {user? (
                            <>
                            <li><Link href="/account">ACCOUNT</Link></li>
                            <li onClick={userSignOut}>SIGN OUT</li>
                            </>
                        ):(
                            <li onClick={()=>{modalHandler(true); handleBurger()}}>SIGN IN</li>
                        )}
                        
                    </ul>

                    <ul>
                        {isAdmin? (
                            admLinks.map(link => <li key={link.id}><Link href={link.href} onClick={()=>{handleBurger()}}>{link.name}</Link></li>)
                        ):(
                            navLinks.map(link => <li key={link.id}><Link href={link.href} onClick={()=>{handleBurger()}}>{link.name}</Link></li>)
                        )}
                    </ul>
         
            </div>
        </div>
    </div>
  )
}

export default Menu