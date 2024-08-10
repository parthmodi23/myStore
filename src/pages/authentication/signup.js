import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import './signup.css'; // Make sure to adjust the path

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ username: '', password: '' });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://mystore-n5bm.onrender.com/register', user);
      console.log('Successfully registered!', response.data);

      // Save userObj and auth token to localStorage
      localStorage.setItem('user', JSON.stringify(response.data.userObj));
      localStorage.setItem('token', response.data.auth);

      alert('Account created successfully!');
      navigate('/Home');
    } catch (error) {
      alert("" + error.response.data.msg);
      console.error('Error registering:', error.response.data.msg);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h3>Sign Up</h3>
        <div>
          {/* <label>UserName:</label> */}
          <input
            type="text"
            name="username"
            value={user.username}
            placeholder="Username"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          {/* <label>Password:</label> */}
          <input
            type="password"
            name="password"
            value={user.password}
            placeholder="Enter password"
            onChange={handleOnChange}
            required
          />
        </div>
        <div>
          <button type="submit"> Sign Up </button>
        </div>
        <p>
          Already registered? <Link to="/signin">Sign In</Link>
        </p>
      </form>
    </div>
  );
}

export default Signup;
