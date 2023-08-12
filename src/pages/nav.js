import React, { useState } from "react";
import '../App.css';
import { Link,useNavigate} from "react-router-dom";
import logo from "../logo.png";
function Nav() {  

  const [searchtext, setSearchinput] = useState("");
  const userAuthenticated = !!localStorage.getItem('token');
  const navigate = useNavigate();


  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    
    navigate('/home');
    alert("you are logout")
  };

  const sendvalue=(e) =>{
    setSearchinput(e.target.value);
  }
  

  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="LOGO" height="100px" />
      </Link>
      <form>
        <div className="InputContainer">
          <input placeholder="Search.." id="input" className="input" type="search" name="search" value={searchtext} onChange={sendvalue} />
          <Link to={`/Search/${searchtext}`}><button type="submit">Search</button></Link>
        </div>
      </form>
     <div className="logincomponent">
       {userAuthenticated ? (
        // logoutbutton when user user already signin or signup
        <button type="submit" onClick={handleLogout}>Logout</button>
      ) : (
        <>
          {/* <Link to="/signup"><button type="submit">Register</button></Link> */}
          <Link to="/signin"><button type="submit">Sign In</button></Link>
        </>
      )}
      <Link to="/cartpage"><button type="submit">Cart🛒</button></Link></div>
    </div>
  );
}

export default Nav;
