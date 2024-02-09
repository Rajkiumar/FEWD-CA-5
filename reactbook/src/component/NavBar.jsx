import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
    handleSearch(e.target.value);
  };

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" className="brand"><h1 className='text'>KalviumBook</h1></Link>
      </div>
      <div className="middle">
        <input
          type="text"
          placeholder="Search"
          className="search-bar"
          value={searchQuery}
          onChange={handleChange}
        />
      </div>
      <div className="right">
        <Link to="/form" className="register-btn">Register</Link>
      </div>
    </div>
  );
};

export default NavBar;
