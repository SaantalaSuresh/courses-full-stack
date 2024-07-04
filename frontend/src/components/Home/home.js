// src/components/Home/Home.js
import React from 'react';

import '../../styles/styles.css';
import { Link } from 'react-router-dom';


const Home = () => {
  const languages = [
  { name: 'C++', description: 'Learn C++ programming from basics to advanced level.', link: '/c++' },
  { name: 'Java', description: 'Master Java programming with our comprehensive course.', link: '/java' },
  { name: 'Python', description: 'An easy-to-follow guide to Python programming.', link: '/python' },
  { name: 'DevOps', description: 'Learn the fundamentals of devops.', link: 'devops' },

  { name: 'JavaScript', description: 'JavaScript Essentials for interactive web development.', link: '/javascript' },

  ]

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Learn Programming</h1>
        <p>The easiest way to learn programming step by step.</p>
        <p>Learn in an interactive environment. Made for absolute beginners.</p>
        <Link to="/python" className='Link-style'>
        
        <button className="try-it-out-btn">Try it out →</button>
        </Link>
        <p className="cookies-notice">Anonymous cookies are used to improve the quality of the course.</p>
      </div>
      <div className="courses-section">
        {languages.map((lang, index) => (
          <Link to={lang.link} className='Link-style'>
          <div className="course-card" key={index}>
            <h2>{lang.name}</h2>
            <p>{lang.description}</p>
            <a href={lang.link} className="start-learning-btn">Start Learning →</a>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
