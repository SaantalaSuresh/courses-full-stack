import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';
import { FaChevronLeft } from 'react-icons/fa';
import '../../styles/styles.css';

const Sidebar = ({ sections, currentVideo, setCurrentVideo }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed((prevState) => !prevState);
  };

  return (
    <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-header">
        {!isCollapsed && (
          <p className="back-to-course">
            <Link id="link" to="/" className='Link-style'>
              <FaChevronLeft className="left-arrow" />
              Back to Home
            </Link>
          </p>
        )}
        <button
          className="toggle-btn"
          onClick={toggleSidebar}
          aria-expanded={!isCollapsed}
          aria-controls="sidebar-content"
        >
          {isCollapsed ? <RiMenuUnfoldFill size={30} /> : <RiMenuFoldFill size={30} />}
        </button>
      </div>

      {!isCollapsed && (
        <div id="sidebar-content">
          <h3 className="section-title">Contents</h3>
          <ul className="sections-list">
            {sections.map((section) => (
              <li
                key={`${section.title}-${section.path}`}
                className={location.pathname === section.path ? 'active' : ''}
                onClick={() => setCurrentVideo(section.path)}
              >
                <Link to={section.path} className='Link-style'>{section.title}</Link>
              </li>
            ))}
          </ul>
          <button className="certificate-btn" >
            Get Certificate
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
