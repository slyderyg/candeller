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
                                <li onClick={()=>(handleBurger())}>SEARCH</li>
                                <li onClick={()=>(handleBurger())}><Link href="/">CART(0)</Link></li>
                            </>
                        )}

                        {user? (
                            <>
                            <li><Link href="/account" onClick={()=>(handleBurger())}>ACCOUNT</Link></li>
                            <li onClick={userSignOut}>SIGN OUT</li>
                            </>
                        ):(
                            <li onClick={()=>{modalHandler(true); handleBurger()}}>SIGN IN</li>
                        )}
                        
                    </ul>

                    <ul>
                        {isAdmin? (
                            admLinks.map(link => <li key={link.id} onClick={()=>{handleBurger()}}><Link href={link.href}>{link.name}</Link></li>)
                        ):(
                            navLinks.map(link => <li key={link.id} onClick={()=>{handleBurger()}}><Link href={link.href}>{link.name}</Link></li>)
                        )}
                    </ul>
         
            </div>
        </div>
    </div>
  )
}

export default Menu