// nav.js
import React, { useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import logo from "../logo.png";


function Nav() {
  const [searchtext, setSearchinput] = useState("");



  function sendvalue(e) {
    setSearchinput(e.target.value);
  }
  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="LOGO" height="100px" />
      </Link>
      <form>
        <div class="InputContainer">
          <input placeholder="Search.." id="input" class="input" type="search" name="search" value={searchtext} onChange={sendvalue} />
          <Link to={`/Search/${searchtext}`}><button type="submit">Search</button></Link>
        </div>



      </form>
      <button type="submit">Sign in</button>
      

    </div>

  );
}

export default Nav;