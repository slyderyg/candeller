'use client'
import Link from "next/link"
import { navLinks } from "../utils/navLinks"

const Navbar = () => {
  return (
    <header>
        <nav className="nav">

            <div className="nav__top">  

                <div className="logo">CANDELLER</div>

                <div className="nav__top__right">
                    <ul>
                        <li onClick={()=>(console.log('search button click'))}>SEARCH</li>
                        <li><Link className="nav__link" href="/">CART(0)</Link></li>
                        <li><Link href="/">ACCOUNT</Link></li>
                    </ul>
                </div>
                
            </div> 

            <div className="divider"></div>

            <div className="navbar">
                <ul>
                    {navLinks.map(link => <li key={link.id}><Link className="navbar__link" href={link.href}>{link.name}</Link></li>)}
                </ul>
            </div>

        </nav>
    </header>
  )
}

export default Navbar