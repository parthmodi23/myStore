import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

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
      await 
      axios.post('http://localhost:5000/register', user);
      console.log('Successfully registered!');
      setUser({ username: '', password: '' });
      alert("account created successfully!")
      navigate('/Home');
    } catch (error) {
      console.error('Error registering:', error);
    }
  };

  return (
    <form>
      <h3>Sign Up</h3>
      <div>
        <label>UserName:-</label>
        <input
          type="text"
          name="username"
          value={user.username}
          placeholder="Username"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <label>Password:-</label>
        <input
          type="password"
          name="password"
          value={user.password}
          placeholder="Enter password"
          onChange={handleOnChange}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      <p>
        Already registered? <Link to="/signin">Sign In</Link>
      </p>
    </form>
  );
}

export default Signup;
