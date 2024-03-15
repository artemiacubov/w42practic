import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styles from './Layout.module.css';
import Home from './Home/Home';

const Header = () => {
  
  return (
    <>
      <header className={styles.header}>
        
      </header>
      <div className={styles.fullscreen_div}> 

        <div className={styles.div_one}>
          <nav>
            <ul>
              <li><Link to="/home">Home</Link></li>
            </ul>
          </nav>
        </div>

        <div className={styles.div_two}> 
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path='/*' element={<Home />} />
          </Routes>
        </div>

        <div className={styles.div_three}>

        </div>
     
      </div>
    </>
  );
};

export default Header;
