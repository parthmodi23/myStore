import React from "react"
import { Link } from "react-router-dom"
import { FaHome, FaBook, FaTshirt } from 'react-icons/fa'; // Font Awesome
import { MdSmartphone } from 'react-icons/md'; //
import { GiChelseaBoot } from 'react-icons/gi'; // Game Icons
import './Nav2.css'
export default function Nav2() {
    return(
        <>
        <nav>

<ul  className="main">
  {/* <li>
    <button type="submit" onClick={logout}>Logout</button>

  </li> */}
  {/* <li>
    <Link to="/login"> <button type="submit">Login</button></Link>

  </li> */}
  <li className="nav_links" >
    <div>
    
   <div className="imges"><Link to="/" ><FaHome size={30}/></Link></div> 
    <Link to="/"><span>Home</span></Link>
    </div>
  </li >
  <li className="nav_links">
    <div>
    <div className="imges"><Link to="/shoes"><GiChelseaBoot size={30}/></Link></div>
    <Link to="/shoes"><span>Shoes</span></Link></div>



  </li>
  <li className="nav_links" >
    <div>
        
    <div className="imges"><Link to="/mobiles"><MdSmartphone  size={30}/></Link></div>
    <Link to="/mobiles"><span>Mobiles</span></Link>

    </div>

  </li>
  <li className="nav_links" >
   <div>
   <div className="imges"><Link to="/clothes"><FaTshirt size={30} /></Link></div>
    <Link to="/clothes"><span>Clothes</span></Link>
   </div>


  </li>
  <li className="nav_links" >
    <div>
    <div className="imges"><Link to="/Books"><FaBook size={30}/></Link></div>
    <Link to="/Books"><span>Books</span></Link>

    </div>

  </li>
</ul>
</nav> 

        </>
    )
    
}