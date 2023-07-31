// nav.js
import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import logo from "../logo.png";

function Nav() {
  const [ searchtext, setSearchinput ] = useState("");


  
  function sendvalue(e){
    setSearchinput(e.target.value);}
    const logout=()=>{
      localStorage.clear()
      window.location.reload()
    }
  return (
    <div className="header">
     <Link to="/">
        <img src={logo} alt="LOGO" height="100px" />
      </Link>
      <form className="search">
        <input  className="mainsearch" type="search" name="search" value={searchtext} onChange={sendvalue}/>
        <Link to={`/Search/${searchtext}`}><button type="submit">Search</button></Link>
      </form>
      <nav>
       
          <ul className="nav_links" text-decoration="none">
            <li>
              <button type="submit" onClick={logout}>Logout</button>
              
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/shoes">Shoes</Link>
            </li>
            <li>
              <Link to="/mobiles">Mobiles</Link>
            </li>
            <li>
              <Link to="/clothes">Clothes</Link>
            </li>
            <li>
              <Link to="/Books">Books</Link>
            </li>
          </ul>
        </nav>

     
    </div>
  
  );
}

export default Nav;
