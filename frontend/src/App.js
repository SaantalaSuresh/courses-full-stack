import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar.js';
import Sidebar from './components/Sidebar/Sidebar';
import VideoComponent from './components/VideoComponent/VideoComponent';
import './styles/styles.css';
import axios from "axios";
import Home from './components/Home/home.js';


const App = () => {
  return (
    <Router>
      <CourseContent />
    </Router>
  );
};

const CourseContent = () => {
  const [currentVideo, setCurrentVideo] = useState('/introduction');
  const [currentVideoData, setCurrentVideoData] = useState(null);
  const [videoData, setVideoData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const sections = [
    { title: 'Introduction to Programming', path: '/' },
    { title: 'Introduction to Python', path: '/python' },
    { title: 'Introduction to C++', path: '/c++' },
    { title: 'Introduction to Java', path: '/java' },
    { title: 'Introduction to JavaScript', path: '/javascript' },
    
    { title: "Introduction to DevOps", path: '/devops' },
  ];

  // useEffect(() => {
  //   const fetchVideoData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:3000/api/courses');
  //       console.log(response.data)
  //       setVideoData(response.data);

  //       const currentPath = location.pathname;
  //       const currentSection = sections.find(section => section.path === currentPath);
  //       console.log(currentPath)
  //       if (currentSection) {
  //         const videoInfo = response.data.find(video => video.title === currentSection.title);
  //         setCurrentVideoData(videoInfo || null);
  //         setCurrentVideo(currentPath);
  //       }
  //     } catch (err) {
  //       console.error('Error fetching video data:', err);
  //     }
  //   };

  //   fetchVideoData();
  // }, [location.pathname, sections]);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await axios.get('https://courses-backend-975w.onrender.com/api/courses/');
        console.log(response.data.data);
        setVideoData(response.data.data);
      } catch (err) {
        console.error('Error fetching video data:', err);
      }
    };
  
    fetchVideoData();
  }, []);
  
  useEffect(() => {
    if (videoData && videoData.length > 0) {
      const currentPath = location.pathname;
      const currentSection = sections.find(section => section.path === currentPath);
      console.log(currentPath);
      if (currentSection) {
        const videoInfo = videoData.find(video => video.title === currentSection.title);
        setCurrentVideoData(videoInfo || null);
        setCurrentVideo(currentPath);
      }
    }
  }, [location.pathname, videoData, sections]);
  

  const currentIndex = sections.findIndex(section => section.path === currentVideo);

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevPath = sections[currentIndex - 1].path;
      setCurrentVideo(prevPath);
      navigate(prevPath);
    }
  };

  const handleNext = () => {
    if (currentIndex < sections.length - 1) {
      const nextPath = sections[currentIndex + 1].path;
      setCurrentVideo(nextPath);
      navigate(nextPath);
    }
  };

  const handleSidebarClick = (path) => {
    setCurrentVideo(path);
    const section = sections.find(section => section.path === path);
    const videoInfo = videoData.find(video => video.title === section.title);
    setCurrentVideoData(videoInfo || null);
    navigate(path);
  };

  return (
    <div className="course-page">
      <Sidebar
        sections={sections}
        currentVideo={currentVideo}
        setCurrentVideo={handleSidebarClick}
      />
      <div className="content-wrapper">
        <NavBar
          handlePrev={handlePrev}
          handleNext={handleNext}
          currentIndex={currentIndex}
          sections={sections}
        />
        <Routes>
        <Route exact
            path="/"
            element={<Home />}
          />
          {sections.map((section) => (
            <Route
              key={section.path} exact
              path={section.path}
              element={<VideoComponent video={currentVideoData} />}
            />
          ))}
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
