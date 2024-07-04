import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/styles.css';

const NavBar = ({ handlePrev, handleNext, currentIndex, sections }) => {
  return (
    <div className="navbar">
      <p className="back-to-course">
        <Link id="link" to="/" className='Link-style'>Home</Link>
      </p>
      <div className="navigation-buttons">
        
        <button onClick={handlePrev} disabled={currentIndex <= 0}>Previous</button>
        <button onClick={handleNext} disabled={currentIndex >= sections.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default NavBar;
