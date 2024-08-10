import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

import './signin.css'; // Adjust the path

function SignIn() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mystore-n5bm.onrender.com/login', credentials);

      if (response && response.data) {
        // Successful sign-in
        const { userObj, auth } = response.data;
        localStorage.setItem('user', JSON.stringify(userObj));
        localStorage.setItem('token', auth);
        navigate('/Home');
      } else {
        console.error('Invalid response from server');
      }

    } catch (error) {
      alert(""+error.response.data.msg)
      console.error('Error signing in:', error.response.data.msg);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSignIn}>
        <h3>Sign In</h3>
        <div className="input-group">
          {/* <label htmlFor="username">Username</label> */}
          <input
            type="text"
            id="username"
            name="username"
            value={credentials.username}
            onChange={handleOnChange}
            placeholder="Enter your username" 
            required
          />
        </div>
        <div className="input-group">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleOnChange}
            placeholder="Enter your password"  
            required
          />
        </div>
        <div className="input-group">
          <button type="submit" >Sign In</button>
        </div>
        <p className="signup-link">
          New User?<br/><Link to="/signup">Create New Account</Link>
        </p>
      </form>
    </div>
  );
}

export default SignIn;
