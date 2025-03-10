
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'; 

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

  
    const existingUsers = localStorage.getItem('users');
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    const userExists = users.some(user => user.username === username);

    if (userExists) {
      alert("Username already exists. Please choose a different username.");
      return;
    }
    
    const newUser = { username, password, email };

    users.push(newUser);


    localStorage.setItem('users', JSON.stringify(users));

    alert("Signup successful! Please log in.");
    navigate('/login');


    setUsername('');
    setPassword('');
    setConfirmPassword('');
    setEmail('');
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Sign Up
          </button>
          <p className="signup-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
