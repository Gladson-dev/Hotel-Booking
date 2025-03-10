import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Login.css';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa';

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInUsername, setLoggedInUsername] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {

    const storedLoggedIn = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');
    if (storedLoggedIn === 'true') {
      setIsLoggedIn(true);
      setLoggedInUsername(storedUsername || '');
    }
  }, []);

  const handleLogin = (event) => {
    event.preventDefault();

  
    const storedUserData = localStorage.getItem('users');
    const users = storedUserData ? JSON.parse(storedUserData) : [];

 
    const user = users.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {

      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('username', username);
      setIsLoggedIn(true);
      setLoggedInUsername(username);
      onLogin(username); 
        
      const previousPage = location.state?.from || "/";
        navigate(previousPage);
    } else {
    
      alert('Invalid username or password.');
    }

   
    setUsername('');
    setPassword('');
  };

  const handleLogout = () => {
    localStorage.setItem('isLoggedIn', 'false');
    localStorage.removeItem('username');
    setIsLoggedIn(false);
    setLoggedInUsername('');
    navigate('/');
  };

  if (isLoggedIn) {
    return (
      <div className="login-container logged-in">
        <div className="login-box welcome-box"> 
          <div className="welcome-header">
            <FaUserCircle className="welcome-icon" /> 
            <h2 className="welcome-message">Welcome, {loggedInUsername}!</h2>
          </div>
          <button className="login-btn logout-btn" onClick={handleLogout}> 
            <FaSignOutAlt className="logout-icon" /> 
            Logout
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
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

          <button type="submit" className="login-btn">
            Login
          </button>
          <p className="signup-text">
            Don't have an account?{' '}
            <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
