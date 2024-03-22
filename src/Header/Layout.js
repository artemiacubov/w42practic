import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './Layout.module.css';
import Home from './Home/Home';

const Header = () => {
  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };
  return (
    <>
    <div>
        <header className={styles.header}>
          2133232
        </header>
        <div className={styles.fullscreen_div}> 

      <div className={styles.div_one}>
      <div 
        className={`${styles.link_div} ${expanded ? styles.expanded : ''}`}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/home">Home</Link>
      </div>
      <div></div>
      <div></div>
    </div>
          <div className={styles.div_two}> 
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path='/*' element={<Home />} />
            </Routes>
          </div>

          <div className={styles.div_one}>
            123231
          </div>
      
        </div>
      </div>
    </>
  );
};

export default Header;

