import React from 'react'
import {BiUser} from 'react-icons/bi'
import {FaLeaf} from 'react-icons/fa'
import France from "../img/france.png";
import  {Link} from "react-router-dom"




const NavBar = () => {
  return (
    <header>
        <nav>
            <Link to="/">
            {/* <img src= {LogoTransparant} alt=""className='logo' /> */}
            <h1>Clean3000<FaLeaf color='green'/></h1>
            
            </Link>
            <div className="nav-links">
                <ul>
                    <li className='flagb'><img src= {France} alt=""className='flag' /></li>
                    
                    <li className='icon'><BiUser color= '#3D3D33' fontSize="2.5rem"/></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}

export default NavBar